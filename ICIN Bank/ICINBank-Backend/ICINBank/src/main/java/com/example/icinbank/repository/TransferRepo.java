package com.example.icinbank.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.icinbank.model.Transfer;

public interface TransferRepo extends CrudRepository <Transfer,Long>{

}
