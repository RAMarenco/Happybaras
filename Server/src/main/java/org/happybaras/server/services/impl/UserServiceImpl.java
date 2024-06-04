package org.happybaras.server.services.impl;

import org.happybaras.server.domain.dtos.UserEditionDTO;
import org.happybaras.server.domain.dtos.UserRegisterDTO;
import org.happybaras.server.domain.entities.Token;
import org.happybaras.server.domain.entities.User;
import org.happybaras.server.repositories.UserRepository;
import org.happybaras.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Token registerToken(User user) throws Exception {
        return null;
    }

    @Override
    public Boolean isTokenValid(User user, String token) {
        return null;
    }

    @Override
    public void cleanTokens(User user) throws Exception {

    }

    @Override
    public User findUserAuthenticated() throws Exception {
        return null;
    }

    @Override
    public User findOneByIdentifier(String identifier) {
        return userRepository.findOneByUsernameOrEmail(identifier, identifier).orElse(null);
    }

    @Override
    public User findByUsernameOrEmail(UserRegisterDTO info) {
        return null;
    }

    @Override
    public boolean checkPassword(User user, String password) {
        return false;
    }

    @Override
    public void create(UserRegisterDTO info) {

    }

    @Override
    public void edit(UserEditionDTO info) {

    }

    @Override
    public void delete() {

    }
}
