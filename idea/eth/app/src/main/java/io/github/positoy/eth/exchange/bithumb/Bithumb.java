package io.github.positoy.eth.exchange.bithumb;

import android.util.Log;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;

import io.github.positoy.eth.exchange.Exchange;
import io.github.positoy.eth.exchange.Ticker;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class Bithumb implements Exchange {
    private static final String TAG = Bithumb.class.getSimpleName();
    private OkHttpClient client;
    private String baseUrl;
    private ObjectMapper objectMapper;

    public Bithumb() {
        this.client = new OkHttpClient();
        this.baseUrl = "https://api.bithumb.com/public/ticker/";
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public double checkPrice(Ticker ticker) throws IOException {
        Log.i(TAG, "checkPrice: " + ticker.name());

        String url = baseUrl + ticker.name();
        Request request = new Request.Builder().url(url).build();
        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful() && response.body() != null) {
                String json = response.body().string();
                BithumbResponse bithumbResponse = objectMapper.readValue(json, BithumbResponse.class);
                return Double.parseDouble(bithumbResponse.getData().getClosing_price());
            } else {
                throw new IOException("Failed to fetch price from Bithumb API");
            }
        }
    }
}