package com.project1.folder2.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project1.folder2.Entity.User;
import com.project1.folder2.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            return "Email already registered!";
        }
        userRepository.save(user);
        return "User registered successfully!";
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
