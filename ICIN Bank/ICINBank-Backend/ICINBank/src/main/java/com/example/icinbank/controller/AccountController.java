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

import com.example.icinbank.model.Account;
import com.example.icinbank.repository.AccountRepo;


@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("Account")
public class AccountController {
	
	@Autowired
	AccountRepo AR;
	
	
	@GetMapping("all")
	public List<Account> getAll()
	{
		List<Account> a= (List<Account>) AR.findAll();
		return a;
	}
	
	
	@PostMapping("add")
	public Account addBook(@RequestBody Account Account)
	{
		return AR.save(Account);
				
	}
	
	// get particular student by their ID
		@GetMapping("Account/{id}")
		public Optional<Account> getAccountById(@PathVariable long id)
		{
			return AR.findById(id);
		}
		
		// URdate existing student 
		@PutMapping("update/{id}")
		public Account updateAccount(@RequestBody Account Account)
		{
			return AR.save(Account);
		}
		
		// delete particular student from database
		@DeleteMapping("delete/{id}")
		public void deleteAccount(@PathVariable long id)
		{
			AR.deleteById(id);
		}

	

}
