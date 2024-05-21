package io.github.positoy.daangn.service.domain;

import io.github.positoy.daangn.category.domain.Category;
import io.github.positoy.daangn.location.domain.Location;
import lombok.Data;

@Data
public class ServiceCreateRequest {
    private String name;
    private String description;
    private Category category;
    private String image;
    private Location location;
    private String provider;
    // Getters and Setters
}