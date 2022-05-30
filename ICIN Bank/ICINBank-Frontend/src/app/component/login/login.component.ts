import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { ShareuserService } from 'src/app/services/shareuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup ;
  constructor(private formBuilder: FormBuilder, private registerservice: RegisterService, private router: Router, 
    private shareData: ShareDataService, private shareuser: ShareuserService) { 
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["",[ Validators.required,Validators.minLength(8), Validators.maxLength(20)]]
    })

    
  }

  ngOnInit(): void {
  }

  login(loginForm: any) {
    console.log(loginForm.value);
    this.registerservice.getUser().subscribe((res) => {
      let user:any = res 
      let incorrect = "wrong"
      for (const  each of user) {
        if (each.email == loginForm.value.email && each.password == loginForm.value.password){
          incorrect = "correct"
          if(each.status == "unblocked") { 
          incorrect = "unblocked"
          this.shareData.exchangeAccount(each.accountNo)
          this.shareuser.exchangeUserId(each.id)
          this.shareData.x = false
          console.log(each.accountNo);
          


        if(each.role == false ) {
          this.router.navigateByUrl("/user")
        } 
        else if (each.role == true) {
          this.router.navigateByUrl("/admin")
         }
        }
        }
      }

       if (incorrect == "wrong" ) {
        alert("Incorrect email or password")  
      }

       else if (incorrect == "correct") {
        alert("This user is blocked by the admin")
      }

    })
  }

  hasError(fieldName: any) {
    let field = this.loginForm.get(fieldName)
    return (field?.invalid && field?.touched && field?.errors)

  }

  get form() {
    return this.loginForm.controls
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }


}
