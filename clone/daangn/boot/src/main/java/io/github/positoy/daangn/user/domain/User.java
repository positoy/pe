package io.github.positoy.daangn.user.domain;

import io.github.positoy.daangn.category.domain.Category;
import io.github.positoy.daangn.item.domain.Item;
import io.github.positoy.daangn.location.domain.Location;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userID;
    private String name;
    private String profilePicture;
    @Embedded
    private Location location;
    private Float accountBalance;
    @OneToMany
    private List<Category> recentCategories;
    @OneToMany
    private List<Item> wishlist;
    @OneToMany(mappedBy = "seller")
    private List<Item> saleHistory;
    @OneToMany(mappedBy = "buyer")
    private List<Item> purchaseHistory;

    public static User create(UserCreateRequest request) {
        User user = new User();
        user.setName(request.getName());
        user.setProfilePicture(request.getProfilePicture());
        user.setLocation(request.getLocation());
        user.setAccountBalance(request.getAccountBalance());
        return user;
    }

    public void addToWishlist(Item item) {
        this.wishlist.add(item);
    }

    public void postItem(Item item) {
        this.saleHistory.add(item);
        item.setSeller(this);
    }

    // Getters and Setters
}
