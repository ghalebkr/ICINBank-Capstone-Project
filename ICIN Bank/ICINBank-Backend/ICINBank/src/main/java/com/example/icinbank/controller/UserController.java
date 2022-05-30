package com.example.icinbank.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.icinbank.model.User;
import com.example.icinbank.repository.UserRepo;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("User")

public class UserController {
	
	@Autowired
	UserRepo UR;
	
	
	@GetMapping("all")
	public List<User> getAll()
	{
		List<User> a= (List<User>) UR.findAll();
		return a;
	}
	
	
	@PostMapping("add")
	public User addBook(@RequestBody User User)
	{
		return UR.save(User);
	}
	
	// get particular student by their ID
		@GetMapping("user/{id}")
		public Optional<User> getUserById(@PathVariable long id)
		{
			return UR.findById(id);
		}
		
		// URdate existing student 
		@PutMapping("update/{id}")
		public User updateUser(@RequestBody User User)
		{
			return UR.save(User);
		}
		
		// delete particular student from database
		@DeleteMapping("delete/{id}")
		public void deleteUser(@PathVariable long id)
		{
			UR.deleteById(id);
		}

	

}
