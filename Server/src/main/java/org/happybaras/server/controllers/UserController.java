package org.happybaras.server.controllers;

import org.happybaras.server.domain.dtos.GeneralResponse;
import org.happybaras.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<GeneralResponse> findAll() {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }

    @GetMapping("/search")
    public ResponseEntity<GeneralResponse> findByEmail() {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }

    @DeleteMapping("/delete")
    public ResponseEntity<GeneralResponse> delete() {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }

    @PostMapping("/update")
    public ResponseEntity<GeneralResponse> update() {
        return GeneralResponse.builder().status(HttpStatus.INTERNAL_SERVER_ERROR).getResponse();
    }

}
