package io.github.positoy.eth.exchange;

import java.io.IOException;

public interface Exchange {
    double checkPrice(Ticker ticker) throws IOException;
}