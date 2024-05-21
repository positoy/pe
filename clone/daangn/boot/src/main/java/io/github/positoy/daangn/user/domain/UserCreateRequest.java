package io.github.positoy.daangn.user.domain;

import io.github.positoy.daangn.location.domain.Location;
import lombok.Data;

@Data
public class UserCreateRequest {
    private String name;
    private String profilePicture;
    private Location location;
    private Float accountBalance;
    // Getters and Setters
}