import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  VM: any  = {
    email: '',
    password: '',
    LoginClick: (email: string, password: string) => {
      console.log(email, password);
      var loginModel: Login = {
        email: email,
        username: 'arun@3463',
        firstName: '',
        lastName: '',
        userId: '',
        password: password,
        isGoogle: false
      }
      this.loginService.loginWithEmail(loginModel).subscribe(
        (authModel) => {
          console.log(authModel); // Do something with the authentication response
          // For example, you could store the authentication data in local storage
          localStorage.setItem('accessToken', authModel.accessToken);
          // Redirect the user to another page
          // You can use Angular Router for navigation
        },
        (error) => {
          console.error('Login failed:', error); // Handle login error
          // You might want to display an error message to the user
        });
    }
  }

}
