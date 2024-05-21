package io.github.positoy.daangn.post.domain;

import io.github.positoy.daangn.category.domain.Category;
import io.github.positoy.daangn.location.domain.Location;
import io.github.positoy.daangn.user.domain.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class Post {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int postID;
    private String title;
    private String content;
    @ManyToOne
    private User author;
    @ManyToOne
    private Category category;
    @Embedded
    private Location location;
    private Date createdAt;
    private int viewCount;
    private int likeCount;
    private int commentCount;

    public static Post create(PostCreateRequest request, User author) {
        Post post = new Post();
        post.setTitle(request.getTitle());
        post.setContent(request.getContent());
        post.setCategory(request.getCategory());
        post.setLocation(request.getLocation());
        post.setAuthor(author);
        post.setCreatedAt(new Date());
        return post;
    }

    // Getters and Setters
}