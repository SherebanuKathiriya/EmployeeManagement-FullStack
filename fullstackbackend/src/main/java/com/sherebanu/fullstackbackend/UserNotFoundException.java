package com.sherebanu.fullstackbackend;

@SuppressWarnings("serial")
public class UserNotFoundException extends RuntimeException {
	public UserNotFoundException(Long id) {
		super("Could not find any User with id: " + id);
	}
}
