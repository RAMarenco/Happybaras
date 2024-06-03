package org.happybaras.server.services;

import org.happybaras.server.domain.dtos.RegisterEntryDTO;
import org.happybaras.server.domain.entities.Entry;
import org.happybaras.server.domain.entities.House;
import org.happybaras.server.domain.entities.User;

import java.util.Date;
import java.util.List;

public interface EntryService {
    Entry registerEntry(RegisterEntryDTO info);
    List<Entry> findAll();
    List<Entry> findByUser(User user);
    List<Entry> findByHouse(House house);
    List<Entry> findByPeriod(Date beginDate, Date endDate);
    List<Entry> findByUserAnPeriod(User user, Date beginDate, Date endDate);
    List<Entry> findByHouseAndPeriod(House house, Date beginDate, Date endDate);

}
