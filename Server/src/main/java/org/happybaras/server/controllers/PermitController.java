package org.happybaras.server.controllers;

import org.happybaras.server.domain.dtos.GeneralResponse;
import org.happybaras.server.services.PermitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/permit")
public class PermitController {
    private final PermitService permitService;

    public PermitController(PermitService permitService) {
        this.permitService = permitService;
    }

//    TODO: add pagination for visitor permits
    @GetMapping("/all-by-visitor-approved")
    public ResponseEntity<GeneralResponse> findByVisitorAndApproved() {
        return GeneralResponse.builder().status(HttpStatus.NOT_FOUND).getResponse();
    }

//    TODO: add pagination in this one as well
    @GetMapping("/all-by-house")
    public ResponseEntity<GeneralResponse> findByHouse() {
        return GeneralResponse.builder().status(HttpStatus.NOT_FOUND).getResponse();
    }

//    TODO: add pagination in this one as well
    @GetMapping("/all-by-resident")
    public ResponseEntity<GeneralResponse> findByResident() {
        return GeneralResponse.builder().status(HttpStatus.NOT_FOUND).getResponse();
    }

    @GetMapping("/latest-by-house")
    public ResponseEntity<GeneralResponse> findLatestByHouse() {
        return GeneralResponse.builder().status(HttpStatus.NOT_FOUND).getResponse();
    }

    @GetMapping("/latest-by-resident")
    public ResponseEntity<GeneralResponse> findLatestByResident() {
        return GeneralResponse.builder().status(HttpStatus.NOT_FOUND).getResponse();
    }

    @PostMapping("/register")
    public ResponseEntity<GeneralResponse> register() {
        return GeneralResponse.builder().status(HttpStatus.NOT_FOUND).getResponse();
    }

    @PostMapping("/approve")
    public ResponseEntity<GeneralResponse> approve() {
        return GeneralResponse.builder().status(HttpStatus.NOT_FOUND).getResponse();
    }

    @PostMapping("/reject")
    public ResponseEntity<GeneralResponse> reject() {
        return GeneralResponse.builder().status(HttpStatus.NOT_FOUND).getResponse();
    }

}
