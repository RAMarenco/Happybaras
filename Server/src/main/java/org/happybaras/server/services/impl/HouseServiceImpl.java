package org.happybaras.server.services.impl;

import org.happybaras.server.domain.dtos.RegisterHouseDTO;
import org.happybaras.server.domain.entities.House;
import org.happybaras.server.domain.entities.User;
import org.happybaras.server.repositories.HouseRepository;
import org.happybaras.server.services.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public void create(RegisterHouseDTO info) {

    }

    @Override
    public void delete(House house) {

    }

    @Override
    public void edit(RegisterHouseDTO info) {

    }

    @Override
    public List<User> getListOfHabitants() {
        return null;
    }

    @Override
    public List<User> addHabitant() {
        return null;
    }

    @Override
    public List<User> deleteHabitant() {
        return null;
    }
}
