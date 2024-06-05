package org.happybaras.server.services.impl;

import org.happybaras.server.domain.dtos.RegisterHouseDTO;
import org.happybaras.server.domain.entities.House;
import org.happybaras.server.domain.entities.User;
import org.happybaras.server.repositories.HouseRepository;
import org.happybaras.server.services.HouseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HouseServiceImpl implements HouseService {
    private final HouseRepository houseRepository;

    public HouseServiceImpl(HouseRepository houseRepository) {
        this.houseRepository = houseRepository;
    }

    @Override
    public List<House> findAll() {
        return houseRepository.findAll();
    }

    @Override
    public House findByHouseNumber(int number) {
        return houseRepository.findByHouseNumberEquals(number).orElse(null);
    }

    @Override
    public House findByOwner(User user) {
        return houseRepository.findByOwner(user).orElse(null);
    }

    @Override
    public void create(RegisterHouseDTO info, User owner) {
        House house = new House();

        house.setHouseNumber(info.getHouseNumber());
        house.setAddress(info.getAddress());
        house.setTelephone(info.getTelephone());
        house.setOwner(owner);

        if(owner != null)
            house.setNumberOfHabitants(1);
        else
            house.setNumberOfHabitants(0);

        houseRepository.save(house);
    }

    @Override
    public void delete(House house) {
        houseRepository.delete(house);
    }

    @Override
    public void update(RegisterHouseDTO info, House house, User owner) {
        house.setAddress(info.getAddress());
        house.setHouseNumber(info.getHouseNumber());
        house.setTelephone(info.getTelephone());

        if(owner != null && house.getNumberOfHabitants() == 0)
            house.setNumberOfHabitants(1);

        house.setOwner(owner);

        houseRepository.save(house);
    }

    @Override
    public List<User> getListOfHabitants(House house) {
        return house.getUsers();
    }

    @Override
    public void addHabitant(House house, User user) {
        house.getUsers().add(user);
        house.setNumberOfHabitants(house.getNumberOfHabitants() + 1);
        houseRepository.save(house);
    }

    @Override
    public void deleteHabitant(House house, User user) {
        house.getUsers().remove(user);
        house.setNumberOfHabitants(house.getHouseNumber() - 1);
        houseRepository.save(house);
    }
}
