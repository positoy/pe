package io.github.positoy.daangn.item.infra;

import io.github.positoy.daangn.item.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Integer> {
}