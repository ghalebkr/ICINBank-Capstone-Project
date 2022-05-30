package com.example.icinbank.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.icinbank.model.User;

public interface UserRepo extends CrudRepository <User,Long> {

}
