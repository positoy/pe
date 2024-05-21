package io.github.positoy.eth.service;

import android.util.Log;

public class TradeExecutor {
    private static final String TAG = "TradeExecutor";

    public void executeTrade(String action, double price, String exchange) {
        // 거래 API를 호출하여 매수 또는 매도 요청을 보냅니다.
        // 여기에 실제 거래소 API 호출 코드를 추가합니다.
        Log.i(TAG,action + "ing on " + exchange + " at price: " + price);
    }

    public void executeTransfer(String fromExchange, String toExchange) {
        // 송금 API를 호출하여 한 거래소에서 다른 거래소로 전송합니다.
        // 여기에 실제 송금 API 호출 코드를 추가합니다.
        Log.i(TAG,"Transferring from " + fromExchange + " to " + toExchange);
    }
}