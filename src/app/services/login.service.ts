import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, AuthModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  apiUrl = 'http://localhost:5004/api'; 

  loginWithEmail(loginData: Login): Observable<AuthModel> { 
    const url = `${this.apiUrl}/Login`; 
    
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      });
    return this.http.post<AuthModel>(url, loginData, { headers });
  }
}
