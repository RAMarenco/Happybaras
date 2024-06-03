package org.happybaras.server.services;

import org.happybaras.server.domain.dtos.RegisterHouseDTO;
import org.happybaras.server.domain.entities.House;
import org.happybaras.server.domain.entities.User;

import java.util.List;

public interface HouseService {
    List<House> findAll();
    void create(RegisterHouseDTO info);
    void delete(House house);
    void edit(RegisterHouseDTO info);
    List<User> getListOfHabitants();
    List<User> addHabitant();
    List<User> deleteHabitant();
}
