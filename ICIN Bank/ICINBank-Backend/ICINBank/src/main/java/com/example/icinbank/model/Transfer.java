package com.example.icinbank.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.transaction.annotation.EnableTransactionManagement;

@Entity
@EnableTransactionManagement
public class Transfer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private long fromAccount;
	private long sendToAccount;
	private String sendFromAccount;
	private String date;
	private long amount;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getFromAccount() {
		return fromAccount;
	}
	public void setFromAccount(long fromAccount) {
		this.fromAccount = fromAccount;
	}
	public long getSendToAccount() {
		return sendToAccount;
	}
	public void setSendToAccount(long sendToAccount) {
		this.sendToAccount = sendToAccount;
	}
	public String getSendFromAccount() {
		return sendFromAccount;
	}
	public void setSendFromAccount(String sendFromAccount) {
		this.sendFromAccount = sendFromAccount;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public long getAmount() {
		return amount;
	}
	public void setAmount(long amount) {
		this.amount = amount;
	}
	public Transfer(long id, long fromAccount, long sendToAccount, String sendFromAccount, String date, long amount) {
		super();
		this.id = id;
		this.fromAccount = fromAccount;
		this.sendToAccount = sendToAccount;
		this.sendFromAccount = sendFromAccount;
		this.date = date;
		this.amount = amount;
	}
	public Transfer() {
		super();
	}
	
	

	
	
	
}
