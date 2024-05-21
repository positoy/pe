package io.github.positoy.daangn.item.domain;

import io.github.positoy.daangn.chatroom.domain.ChatRoom;
import io.github.positoy.daangn.location.domain.Location;
import io.github.positoy.daangn.user.domain.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Entity
public class Item {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemID;
    private String name;
    private String description;
    private float price;
    private String image;
    @ManyToOne
    private User seller;
    @ManyToOne
    private User buyer;
    @Embedded
    private Location location;
    private Date postedAt;
    private int likeCount;
    @OneToMany
    private List<ChatRoom> chatRooms;

    public static Item create(ItemCreateRequest request, User seller) {
        Item item = new Item();
        item.setName(request.getName());
        item.setDescription(request.getDescription());
        item.setPrice(request.getPrice());
        item.setImage(request.getImage());
        item.setLocation(request.getLocation());
        item.setSeller(seller);
        item.setPostedAt(new Date());
        return item;
    }

    // Getters and Setters
}