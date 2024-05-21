package io.github.positoy.daangn.chatroom.domain;

import io.github.positoy.daangn.chat.domain.Chat;
import io.github.positoy.daangn.user.domain.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Entity
public class ChatRoom {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatRoomID;
    @ManyToMany
    private List<User> participants;
    @OneToOne
    private Chat recentMessage;
    private Date lastActive;

    public static ChatRoom create(ChatRoomCreateRequest request, List<User> participants) {
        ChatRoom chatRoom = new ChatRoom();
        chatRoom.setParticipants(participants);
        chatRoom.setLastActive(new Date());
        return chatRoom;
    }

    // Getters and Setters
}