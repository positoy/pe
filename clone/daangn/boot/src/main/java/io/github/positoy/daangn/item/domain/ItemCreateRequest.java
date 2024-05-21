package io.github.positoy.daangn.item.domain;

import io.github.positoy.daangn.location.domain.Location;
import lombok.Data;

@Data
public class ItemCreateRequest {
    private String name;
    private String description;
    private Float price;
    private String image;
    private Location location;
    // Getters and Setters
}