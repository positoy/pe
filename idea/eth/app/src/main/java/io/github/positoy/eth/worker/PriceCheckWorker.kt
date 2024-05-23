package io.github.positoy.eth.worker;

import android.content.Context;
import android.util.Log;
import androidx.work.OneTimeWorkRequest
import androidx.work.WorkManager

import androidx.work.Worker
import androidx.work.WorkerParameters;
import io.github.positoy.eth.currency.Currency
import io.github.positoy.eth.currency.CurrencyExchange

import io.github.positoy.eth.exchange.Ticker;
import io.github.positoy.eth.exchange.binance.Binance;
import io.github.positoy.eth.exchange.bithumb.Bithumb;
import io.github.positoy.eth.service.TradeExecutor
import java.util.concurrent.TimeUnit

class PriceCheckWorker(context: Context, params: WorkerParameters) : Worker(context, params) {
    val TAG = PriceCheckWorker::class.java.simpleName
    val ALERT_THRESHOLD = 0.01
    val TRANSACTION_THRESHOLD = 0.02

    val bithumb = Bithumb()
    val binance = Binance()
    val currencyExecutor = CurrencyExchange()
    val executor = TradeExecutor()

    override fun doWork(): Result {
        scheduleNextWork(applicationContext)
        try {
            val bithumbPrice = bithumb.checkPrice(Ticker.ETH);
            val binancePrice = currencyExecutor.convert(
                binance.checkPrice(Ticker.ETH),
                Currency.USD,
                Currency.KRW
            );
            val priceDifference = bithumbPrice - binancePrice;

            Log.i(TAG, "Bithumb ETH Price: " + bithumbPrice);
            Log.i(TAG, "Binance ETH Price: " + binancePrice);
            Log.i(TAG, "Price Difference: " + priceDifference);

            if (Math.abs(priceDifference) >= ALERT_THRESHOLD) {
                Log.i(TAG, "Alert: Significant price difference detected!");
            }

            if (Math.abs(priceDifference) >= TRANSACTION_THRESHOLD) {
                if (priceDifference > 0) {
                    Log.i(TAG, "Executing Arbitrage: Buying on Binance, Selling on Bithumb");
                    executor.executeTrade("buy", binancePrice, "Binance");
                    executor.executeTransfer("Binance", "Bithumb");
                    executor.executeTrade("sell", bithumbPrice, "Bithumb");
                } else {
                    Log.i(TAG, "Executing Arbitrage: Buying on Bithumb, Selling on Binance");
                    executor.executeTrade("buy", bithumbPrice, "Bithumb");
                    executor.executeTransfer("Bithumb", "Binance");
                    executor.executeTrade("sell", binancePrice, "Binance");
                }
            }
        } catch (e: Exception) {
            e.printStackTrace();
        }
        return Result.success();
    }

    companion object {
        var duration: Long = 10

        @JvmStatic
        fun scheduleNextWork(context: Context) {
            WorkManager.getInstance(context).enqueue(
                OneTimeWorkRequest
                    .Builder(PriceCheckWorker::class.java)
                    .setInitialDelay(duration, TimeUnit.SECONDS)
                    .build()
            )
        }
    }
}