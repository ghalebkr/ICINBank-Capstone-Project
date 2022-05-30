import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountDataService } from 'src/app/services/account-data.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transferForm : FormGroup;
  accountNumber:any;
  account:any;
  constructor(private formBuilder: FormBuilder, private shareData:ShareDataService, private accountData:AccountDataService, 
    private transferservice:TransferService) {

    this.transferForm = this.formBuilder.group({
      sendToAccount:['',Validators.required],
      sendFromAccount: ['', Validators.required],
      amount: ['', Validators.required]
    })
    this.accountNumber = localStorage.getItem("accountNo");
    this.accountNumber = parseInt(localStorage.getItem("accountNo")?.toString()!);

   }
  
  ngOnInit(): void {
    this.accountData.getAccountDetails().subscribe(rep => {
      this.account=rep
    })
  }

  transfer(transferForm: any) {
    console.log(this.transferForm.value.amount);
    console.log(this.account.accountBalance);
    console.log(this.account);

    for (const each of this.account) {
      console.log(each);
      
      if (this.accountNumber == each.accountNumber && this.transferForm.value.sendFromAccount == each.accountType && this.transferForm.value.amount <= each.accountBalance) {
        
        console.log(each.id);
        console.log(typeof (each.accountBalance));
        console.log(typeof (each.accountBalance - transferForm.value.amount));

        this.accountData.updateAccount(each.id, { ...each, "accountBalance": (each.accountBalance - transferForm.value.amount) }).subscribe(rep => {
          console.log(rep);
        })
        this.transferservice.addTransfer({ ...transferForm.value, "fromAccount": this.accountNumber, "date": new Date() }).subscribe(rep => { })
      }
    }

  }


}
