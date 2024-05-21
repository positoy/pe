package io.github.positoy.daangn.meeting.domain;

import io.github.positoy.daangn.location.domain.Location;
import lombok.Data;

@Data
public class MeetingCreateRequest {
    private String name;
    private String description;
    private String image;
    private Location location;
    // Getters and Setters
}