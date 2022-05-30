import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  constructor(private formBuilder : FormBuilder, private registerservice:RegisterService) {
    this.registerForm = this.formBuilder.group({
      firstName:["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      gender: ["", Validators.required],
      country: ["", Validators.required],
      dateofbirth: ["", Validators.required],
      image: ["", Validators.required],
      accountNo: ["", Validators.required],
      iban: ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }
  register(registerForm:any) {
    console.log(registerForm.value);
    let emailcheck = false

    this.registerservice.getUser().subscribe( res => {
      let user:any =res
      for (const each of user ){
      if ( each.email == registerForm.value.email) {
        emailcheck = true
        alert ("Use another email because this email is already used")
        break
      }
    }
      if (emailcheck == false)
      if (registerForm.valid) {
        this.registerservice.addUser({ ...registerForm.value, role: false }).subscribe(res => {

        })
      }
    })
  }

  hasError(fieldName: any) {
    let field = this.registerForm.get(fieldName)
    return (field?.invalid && field?.touched && field?.errors)

  }

  get form() {
    return this.registerForm.controls
  }

  get firstName() {
    return this.registerForm.controls['firstName'];
  }

  get lastName() {
    return this.registerForm.controls['lastName'];
  }

  get gender() {
    return this.registerForm.controls['gender'];
  }

  get country() {
    return this.registerForm.controls['country'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get dateofbirth() {
    return this.registerForm.controls['dateofbirth'];
  }

  get image() {
    return this.registerForm.controls['image'];
  }

  get accountNo() {
    return this.registerForm.controls['accountNo'];
  }

  get iban() {
    return this.registerForm.controls['iban'];
  }

  




}
