package org.happybaras.server.repositories;

import org.happybaras.server.domain.entities.PermitStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PermitStatusRepository extends JpaRepository<PermitStatus, UUID> {
}
