import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:8080/Transfer"
  addTransfer(transfer: any): Observable<object> {
    return this.http.post(`${this.url}/add`, transfer)
  }

  getTransfer(): Observable<object> {
    return this.http.get(`${this.url}/all`)
  }
}
