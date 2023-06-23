package com.sherebanu.fullstackbackend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
	
	@Autowired
	UserService service;
	
	@PostMapping("/user")
	User newUser(@RequestBody User user) {
		return service.saveUser(user);
	}
	
	@GetMapping("/users")
	List<User> getUsers(){
		return service.findUsers();
	}
	
	@GetMapping("/user/{id}")
	User getUserById(@PathVariable Long id) {
		return service.findById(id);
	}
	
	@PutMapping("/user/{id}")
	 public User editUser(@PathVariable Long id, @RequestBody User user) {
	        return service.editUser(id, user);
	 }
	
	@DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
		if (!service.existById(id)) {
	        throw new UserNotFoundException(id); 
	    }
		
        User user = (User) service.findById(id);
        service.delete(user);
        return ResponseEntity.status(HttpStatus.OK).body("User with ID " + id + " has been deleted.");
    }
}
