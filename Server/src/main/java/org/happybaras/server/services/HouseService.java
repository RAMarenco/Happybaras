package org.happybaras.server.services;

import org.happybaras.server.domain.dtos.RegisterHouseDTO;
import org.happybaras.server.domain.entities.House;
import org.happybaras.server.domain.entities.User;

import java.util.List;
import java.util.Optional;

public interface HouseService {
    List<House> findAll();
    House findByHouseNumber(int number);
    void create(RegisterHouseDTO info);
    void delete(House house);
    void edit(RegisterHouseDTO info);
    List<User> getListOfHabitants();
    List<User> addHabitant();
    List<User> deleteHabitant();
}
