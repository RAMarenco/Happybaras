package org.happybaras.server.repositories;

import org.happybaras.server.domain.entities.Entry;
import org.happybaras.server.domain.entities.House;
import org.happybaras.server.domain.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;
import java.util.UUID;

public interface EntryRepository extends JpaRepository<Entry, UUID> {
    List<Entry> findByUserAndTimestampBetween(User user, Date beginDate, Date endDate);
    List<Entry> findByTimestampBetween(Date beginDate, Date endDate);
    List<Entry> findByHouseAndTimestampBetween(House house, Date beginDate, Date endDate);
}
