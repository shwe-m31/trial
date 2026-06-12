package com.project1.folder2.Service;

<<<<<<< HEAD
import java.util.List;

=======
>>>>>>> 271661c6641c879e836a2a530590d8e92845e223
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
<<<<<<< HEAD

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
=======
>>>>>>> 271661c6641c879e836a2a530590d8e92845e223
}
