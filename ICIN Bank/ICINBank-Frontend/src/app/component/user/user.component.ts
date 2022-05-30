import { Component, OnInit } from '@angular/core';
import { AccountDataService } from 'src/app/services/account-data.service';
import { RegisterService } from 'src/app/services/register.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { ShareuserService } from 'src/app/services/shareuser.service';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private shareData: ShareDataService, private accountData: AccountDataService, private transferservice:TransferService,
    private register: RegisterService, private shareuser: ShareuserService) { }
  accountNo: any;
  account: any;
  transferDetails: any;
  accountType: String = "";
  history: boolean = false;
  userID:any;

  ngOnInit(): void {

    this.shareData.shareSearch.subscribe(rep => {

      if (this.shareData.x == false) {
        localStorage.setItem("accountNo", rep.toString());
      }
      this.accountNo = localStorage.getItem("accountNo");
    })
    
    this.shareuser.shareSearch.subscribe(rep => {

      if (this.shareData.x == false) {
        localStorage.setItem("userID", rep.toString());
      }
      this.userID = localStorage.getItem("userID");
      
    })

    this.accountData.getAccountDetails().subscribe(rep => {
      this.account = rep
      console.log(rep);
      
    })

    this.transferservice.getTransfer().subscribe(rep => {
      this.transferDetails = rep
      console.log(rep);

    })

  }

  request(){
    this.register.getUserID(this.userID).subscribe(rep => {
      if (this.account.chequebook != "active") {
        this.register.updateUser(this.userID, { ...rep, chequebook: "pending" }).subscribe(rep => {
          console.log(rep);
          console.log(this.userID);
          
        })

      }
      alert("The request send to the admin")
    })
   
  }

}
