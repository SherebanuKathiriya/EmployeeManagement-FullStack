package com.sherebanu.fullstackbackend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	UserRepository repo;
	
	User saveUser(User newUser) {
		return repo.save(newUser);
	}

	public List<User> findUsers() {
		return repo.findAll();
	}

	public void delete(User user) {
		repo.delete(user);	
	}

	public User findById(Long id) {
		return repo.findById(id).orElseThrow(()->new UserNotFoundException(id));
	}

	public User editUser(Long id, User userDetails) {
        User user = findById(id);

        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setUsername(userDetails.getUsername());
   
        return saveUser(user);
    }

	public boolean existById(Long id) {
		return repo.existsById(id);
	}
	
	
}
