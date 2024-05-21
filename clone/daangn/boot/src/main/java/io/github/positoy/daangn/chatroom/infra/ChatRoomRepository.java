package io.github.positoy.daangn.chatroom.infra;

import io.github.positoy.daangn.chatroom.domain.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRoomRepository extends JpaRepository<ChatRoom, Integer> {
}
