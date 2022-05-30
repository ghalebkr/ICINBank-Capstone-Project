import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user: any;
  constructor(private registerService: RegisterService) {

  }

  ngOnInit(): void {
    this.registerService.getUser().subscribe(res => {
      this.user = res
    })
  }

  blockUser(userDetails: any) {
    if (userDetails.status == "unblocked") {
      this.registerService.updateUser(userDetails.id, { ...userDetails, status: "blocked" }).subscribe(res => {
        console.log(res);

      })
      location.reload()
    }
    else {
      this.registerService.updateUser(userDetails.id, { ...userDetails, status: "unblocked" }).subscribe(res => {
        console.log(res);
      })
    }
    location.reload()
  }


  chequeBook(userDetails: any) {
    if (userDetails.chequebook == "pending") {
      this.registerService.updateUser(userDetails.id, { ...userDetails, chequebook: "active" }).subscribe(res => {
        console.log(res);

      })
      location.reload()
    }


  }


}
