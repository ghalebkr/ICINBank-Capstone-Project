import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareuserService {

  x = true;
  private content = new BehaviorSubject<Number>(0);
  public shareSearch = this.content.asObservable();

  constructor() { }



  exchangeUserId(account: number) {
    this.content.next(account);
    console.log(account);


  }
}
