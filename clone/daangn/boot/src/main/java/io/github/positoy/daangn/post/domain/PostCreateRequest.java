package io.github.positoy.daangn.post.domain;

import io.github.positoy.daangn.category.domain.Category;
import io.github.positoy.daangn.location.domain.Location;
import lombok.Data;

@Data
public class PostCreateRequest {
    private String title;
    private String content;
    private Category category;
    private Location location;
    // Getters and Setters
}