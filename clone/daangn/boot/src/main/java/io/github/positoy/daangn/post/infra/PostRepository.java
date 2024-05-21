package io.github.positoy.daangn.post.infra;

import io.github.positoy.daangn.post.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
}