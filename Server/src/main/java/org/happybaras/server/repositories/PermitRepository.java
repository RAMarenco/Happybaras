package org.happybaras.server.repositories;

import org.happybaras.server.domain.entities.House;
import org.happybaras.server.domain.entities.Permit;
import org.happybaras.server.domain.entities.PermitStatus;
import org.happybaras.server.domain.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;
import java.util.UUID;

public interface PermitRepository extends JpaRepository<Permit, UUID> {
    List<Permit> findAllByVisitorAndStatusEquals(User user, PermitStatus status); // For the visitor to see their approved permits
    List<Permit> findAllByHouse(House house); // Historical registers that the main resident can see
    List<Permit> findAllByHouseAndStatus(House house, PermitStatus status); // Just for filtering purposes and for the main resident
    List<Permit> findAllByHouseAndTimestampBetween(House house, Date beginDate, Date endDate); // For showing to the main resident the latest permits of the day
    List<Permit> findAllByResident(User user); // The normal residents can see only the permits they made

}
