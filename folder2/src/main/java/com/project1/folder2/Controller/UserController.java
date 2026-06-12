package com.project1.folder2.Controller;

<<<<<<< HEAD
import java.util.List;

=======
>>>>>>> 271661c6641c879e836a2a530590d8e92845e223
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.project1.folder2.Entity.User;
import com.project1.folder2.Service.UserService;


@CrossOrigin(origins = "http://localhost:3000") // allow frontend React access
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    @GetMapping("/")
    public String home() {
        return "✅ Backend is running successfully!";
    }
    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }
<<<<<<< HEAD

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
=======
>>>>>>> 271661c6641c879e836a2a530590d8e92845e223
}
