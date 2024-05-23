package io.github.positoy.eth.currency

import android.util.Log
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import okhttp3.OkHttpClient
import okhttp3.Request
import java.io.IOException

class CurrencyExchange {
    private val apiKey = "c1dbb0e29d14e522f1f8dce9" // 여기에 실제 API 키를 입력하세요.
    private val apiUrl = "https://v6.exchangerate-api.com/v6/$apiKey/latest/"
    private val client = OkHttpClient()
    private val objectMapper = jacksonObjectMapper()

    fun convert(amount: Double, from: Currency, to: Currency): Double {
        val exchangeRate = getExchangeRate(from, to)
        return amount * exchangeRate
    }

    private fun getExchangeRate(from: Currency, to: Currency): Double {
        assert(apiKey.isNotBlank())
        val url = "$apiUrl${from.name}"
        val request = Request.Builder().url(url).build()

        client.newCall(request).execute().use { response ->
            if (!response.isSuccessful) throw IOException("Unexpected code $response")

            val responseData = response.body?.string()
            Log.i("CurrencyExchange", responseData!!)
            val exchangeRateResponse =
                objectMapper.readValue(responseData, ExchangeRateResponse::class.java)
            return exchangeRateResponse.conversionRates[to.name]!!
        }
    }
}