package io.github.positoy.eth.exchange.bithumb;

import lombok.Data;

@Data
public class BithumbResponse {
    private String status;
    private BithumbData data;

    @Data
    public static class BithumbData {
        private String opening_price;
        private String closing_price;
        private String min_price;
        private String max_price;
        private String units_traded;
        private String acc_trade_value;
        private String prev_closing_price;
        private String units_traded_24H;
        private String acc_trade_value_24H;
        private String fluctate_24H;
        private String fluctate_rate_24H;
        private String date;
    }
}