import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {
  updateUser(id: any, arg1: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:8080/Account"


  getAccountDetails(): Observable<object> {
    return this.http.get(`${this.url}/all`)
  }

  updateAccount(id: any, value: any): Observable<object> {

    return this.http.put(`${this.url}/update/${id}`, value)
  }


}
