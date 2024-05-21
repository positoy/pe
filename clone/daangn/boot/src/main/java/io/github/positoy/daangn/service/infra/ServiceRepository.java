package io.github.positoy.daangn.service.infra;

import io.github.positoy.daangn.service.domain.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Integer> {
}
