package io.github.positoy.daangn.user.infra;

import io.github.positoy.daangn.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}