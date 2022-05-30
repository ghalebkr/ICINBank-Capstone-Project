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

import com.example.icinbank.model.Transfer;
import com.example.icinbank.repository.TransferRepo;



@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("Transfer")
public class TransferController {
	
	@Autowired
	TransferRepo TR;
	
	
	@GetMapping("all")
	public List<Transfer> getAll()
	{
		List<Transfer> a= (List<Transfer>) TR.findAll();
		return a;
	}
	
	
	@PostMapping("add")
	public Transfer addBook(@RequestBody Transfer Transfer)
	{
		return TR.save(Transfer);
				
	}
	
	// get particular student by their ID
		@GetMapping("Transfer/{id}")
		public Optional<Transfer> getTransferById(@PathVariable long id)
		{
			return TR.findById(id);
		}
		
		// URdate existing student 
		@PutMapping("URdate/{id}")
		public Transfer URdateTransfer(@RequestBody Transfer Transfer)
		{
			return TR.save(Transfer);
		}
		
		// delete particular student from database
		@DeleteMapping("delete/{id}")
		public void deleteTransfer(@PathVariable long id)
		{
			TR.deleteById(id);
		}

	

}
