package org.happybaras.server.services;

import org.happybaras.server.domain.dtos.RegisterHouseDTO;
import org.happybaras.server.domain.entities.House;
import org.happybaras.server.domain.entities.User;

import java.util.List;

public interface HouseService {
    List<House> findAll();
    House findByHouseNumber(int number);
    House findByOwner(User user);
    void create(RegisterHouseDTO info, User owner);
    void delete(House house);
    void update(RegisterHouseDTO info, House house, User owner);
    List<User> getListOfHabitants(House house);
    void addHabitant(House house, User user);
    void deleteHabitant(House house, User user);
}
