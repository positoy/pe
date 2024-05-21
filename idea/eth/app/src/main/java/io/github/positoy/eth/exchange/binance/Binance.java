package io.github.positoy.eth.exchange.binance;

import android.util.Log;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;

import io.github.positoy.eth.exchange.Exchange;
import io.github.positoy.eth.exchange.Ticker;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class Binance implements Exchange {
    private static final String TAG = Binance.class.getSimpleName();

    private OkHttpClient client;
    private String baseUrl;
    private ObjectMapper objectMapper;

    public Binance() {
        this.client = new OkHttpClient();
        this.baseUrl = "https://api.binance.com/api/v3/ticker/price?symbol=";
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public double checkPrice(Ticker ticker) throws IOException {
        Log.i(TAG, "checkPrice: " + ticker.name());

        String url = baseUrl + ticker.name() + "USDT";
        Request request = new Request.Builder().url(url).build();
        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful() && response.body() != null) {
                String json = response.body().string();
                BinanceResponse binanceResponse = objectMapper.readValue(json, BinanceResponse.class);
                return Double.parseDouble(binanceResponse.getPrice());
            } else {
                throw new IOException("Failed to fetch price from Binance API");
            }
        }
    }
}