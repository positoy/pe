package io.github.positoy.daangn.chat.infra;

import io.github.positoy.daangn.chat.domain.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Integer> {
}
