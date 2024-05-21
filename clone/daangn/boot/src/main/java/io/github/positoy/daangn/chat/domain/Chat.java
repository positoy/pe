package io.github.positoy.daangn.chat.domain;

import io.github.positoy.daangn.user.domain.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Entity
public class Chat {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatID;
    @ManyToMany
    private List<User> participants;
    private String content;
    private Date timestamp;

    public static Chat create(ChatCreateRequest request, List<User> participants) {
        Chat chat = new Chat();
        chat.setContent(request.getContent());
        chat.setTimestamp(new Date());
        chat.setParticipants(participants);
        return chat;
    }

    // Getters and Setters
}