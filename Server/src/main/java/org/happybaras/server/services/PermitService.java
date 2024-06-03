package org.happybaras.server.services;

import org.happybaras.server.domain.entities.House;
import org.happybaras.server.domain.entities.Permit;
import org.happybaras.server.domain.entities.PermitStatus;
import org.happybaras.server.domain.entities.User;

import java.util.List;

public interface PermitService {
    void create();
    List<Permit> findAll();
    List<Permit> findByVisitorAndStatusApproved(User user);
    List<Permit> findByHouse(House house);
    List<Permit> findLatestPermitsRequests(House house, PermitStatus status);


}
