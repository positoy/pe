package io.github.positoy.daangn.category.infra;

import io.github.positoy.daangn.category.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}