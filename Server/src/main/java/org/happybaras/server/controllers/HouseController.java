package org.happybaras.server.controllers;

import org.happybaras.server.domain.dtos.GeneralResponse;
import org.happybaras.server.services.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/house")
public class HouseController {
    private final HouseService houseService;

    public HouseController(HouseService houseService) {
        this.houseService = houseService;
    }
    
//    TODO: add pagination
    @GetMapping("/all")
    public ResponseEntity<GeneralResponse> findAll() {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }
    
    @GetMapping("/find-by-number")
    public ResponseEntity<GeneralResponse> findByHouseNumber(/*TODO: HouseNumberDTO*/) {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }
    
    @GetMapping("/find-by-owner")
    public ResponseEntity<GeneralResponse> findByOwner() {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }
    
    @GetMapping("/find-habitants")
    public ResponseEntity<GeneralResponse> findHabitants() {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }
    
    @PostMapping("/create")
    public ResponseEntity<GeneralResponse> create() {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }
    
    @PostMapping("/update")
    public ResponseEntity<GeneralResponse> update() {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }
    
    @DeleteMapping("/delete")
    public ResponseEntity<GeneralResponse> delete() {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }

    @PostMapping("/add-habitant")
    public ResponseEntity<GeneralResponse> addHabitant(/*TODO: Add habitant DTO*/) {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }

    @PostMapping("/delete-habitant")
    public ResponseEntity<GeneralResponse> deleteHabitant(/*TODO: Add habitant DTO*/) {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }
}
