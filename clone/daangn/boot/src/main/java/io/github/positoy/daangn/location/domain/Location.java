package io.github.positoy.daangn.location.domain;

import jakarta.persistence.Embeddable;

@Embeddable
public class Location {
    private int locationID;
    private String name;
    private float latitude;
    private float longitude;

    // Getters and Setters
}
