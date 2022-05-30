import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }
  url: string = "http://localhost:8080/User"

  addUser(user:any):Observable<object> {
    return this.httpClient.post(`${this.url}/add`,user)
  }

  getUser(): Observable<object> {
    return this.httpClient.get(`${this.url}/all`)
  }

  getUserID(id:number): Observable<object> {
    return this.httpClient.get(`${this.url}/user/${id}`)
  }


  updateUser(id: any, value: any): Observable<object> {

    return this.httpClient.put(`${this.url}/update/${id}`, value)
  }
}
