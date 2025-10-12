package com.project1.folder2.Controller;

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
}
