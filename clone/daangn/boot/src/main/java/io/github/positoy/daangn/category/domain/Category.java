package io.github.positoy.daangn.category.domain;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.beans.factory.parsing.Location;
import org.springframework.data.annotation.Id;

@Data
@Entity
public class Category {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int categoryID;
    private String name;

    public static Category create(CategoryCreateRequest request) {
        Category category = new Category();
        category.setName(request.getName());
        return category;
    }

    // Getters and Setters
}