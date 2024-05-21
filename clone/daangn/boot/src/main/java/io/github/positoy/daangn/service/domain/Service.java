package io.github.positoy.daangn.service.domain;

import io.github.positoy.daangn.category.domain.Category;
import io.github.positoy.daangn.location.domain.Location;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Service {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long serviceID;
    private String name;
    private String description;
    @ManyToOne
    private Category category;
    private String image;
    @Embedded
    private Location location;
    private String provider;

    public static Service create(ServiceCreateRequest request) {
        Service service = new Service();
        service.setName(request.getName());
        service.setDescription(request.getDescription());
        service.setCategory(request.getCategory());
        service.setImage(request.getImage());
        service.setLocation(request.getLocation());
        service.setProvider(request.getProvider());
        return service;
    }

    // Getters and Setters
}