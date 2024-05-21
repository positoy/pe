package io.github.positoy.eth;

import android.Manifest;
import android.app.Notification;
import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.provider.SyncStateContract;
import android.util.Log;

import androidx.annotation.Nullable;
import androidx.core.app.ActivityCompat;
import androidx.core.app.NotificationCompat;

import java.io.IOException;
import java.util.Arrays;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

import io.github.positoy.eth.exchange.Ticker;
import io.github.positoy.eth.exchange.binance.Binance;
import io.github.positoy.eth.exchange.bithumb.Bithumb;
import io.github.positoy.eth.service.TradeExecutor;

public class PriceCheckService extends Service {
    private static final String TAG = PriceCheckService.class.getSimpleName();

    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
    private final Bithumb bithumb = new Bithumb();
    private final Binance binance = new Binance();
    private final int interval = 10;
    private final TradeExecutor executor = new TradeExecutor();
    private final double alertThreshold = 0.01;
    private final double transactionThreshold = 0.02;

    @Override
    public void onCreate() {
        super.onCreate();

        // 알림 생성
        Notification notification = new NotificationCompat.Builder(this, "foreground_service_channel")
                .setContentTitle("Foreground Service")
                .setContentText("Service is running in the foreground")
                .build();

        // 서비스를 Foreground로 설정
        startForeground(1, notification);

    }

    public void start() {
        Log.i(TAG, "PriceCheckService: starting");
        try {
            double bithumbPrice = bithumb.checkPrice(Ticker.ETH);
            double binancePrice = binance.checkPrice(Ticker.ETH);

            Log.i(TAG, "Bithumb ETH Price: " + bithumbPrice);
            Log.i(TAG, "Binance ETH Price: " + binancePrice);

            double priceDifference = bithumbPrice - binancePrice;
            if (Math.abs(priceDifference) >= alertThreshold) {
                Log.i(TAG, "Alert: Significant price difference detected!");
            }

            if (Math.abs(priceDifference) >= transactionThreshold) {
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
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        stopService(new Intent(this, PriceCheckService.class));
    }
}