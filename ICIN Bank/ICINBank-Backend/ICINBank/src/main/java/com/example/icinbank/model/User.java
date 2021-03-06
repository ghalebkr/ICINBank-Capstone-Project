package com.example.icinbank.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.transaction.annotation.EnableTransactionManagement;

@Entity
@EnableTransactionManagement
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String firstName;
	private String lastName;
	@Column (unique= true)
	private String email;
	private String password;
	private String gender;
	private String country;
	private String dateofbirth;
	private String image;
	private long accountNo;
	private String iban;
	private boolean role;
	@Column(columnDefinition = "varchar(255) default 'NoRequest'")
	private String chequebook;
    @Column(columnDefinition = "varchar(255) default 'unblocked'")
	private String status;
    
    
    
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getDateofbirth() {
		return dateofbirth;
	}
	public void setDateofbirth(String dateofbirth) {
		this.dateofbirth = dateofbirth;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public long getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(long accountNo) {
		this.accountNo = accountNo;
	}
	public String getIban() {
		return iban;
	}
	public void setIban(String iban) {
		this.iban = iban;
	}
	public boolean isRole() {
		return role;
	}
	public void setRole(boolean role) {
		this.role = role;
	}
	public String getChequebook() {
		return chequebook;
	}
	public void setChequebook(String chequebook) {
		this.chequebook = chequebook;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public User(long id, String firstName, String lastName, String email, String password, String gender,
			String country, String dateofbirth, String image, long accountNo, String iban, boolean role,
			String chequebook, String status) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.country = country;
		this.dateofbirth = dateofbirth;
		this.image = image;
		this.accountNo = accountNo;
		this.iban = iban;
		this.role = role;
		this.chequebook = chequebook;
		this.status = status;
	}
	public User() {
		super();
	}

	
	
	
	
	
	

	
	
	
}
