package org.happybaras.server.services;

import org.happybaras.server.domain.dtos.UserEditionDTO;
import org.happybaras.server.domain.dtos.UserRegisterDTO;
import org.happybaras.server.domain.entities.Token;
import org.happybaras.server.domain.entities.User;

public interface UserService {
    // Token management
    Token registerToken(User user) throws Exception;

    Boolean isTokenValid(User user, String token);

    void cleanTokens(User user) throws Exception;

    User findUserAuthenticated() throws Exception;

    User findOneByIdentifier(String identifier);

    User findByUsernameOrEmail(UserRegisterDTO info);

    void createUser(UserRegisterDTO info);
}
