package com.example.icinbank.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.icinbank.model.Account;

public interface AccountRepo extends CrudRepository <Account,Long>{

}
