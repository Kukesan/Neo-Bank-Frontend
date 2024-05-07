import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private router:Router) {
    localStorage.clear();
   }

  ngOnInit(): void {
  }

  VM: any  = {
    email: '',
    password: '',
    LoginClick: (email: string, password: string) => {
      console.log(email, password);
      var loginModel: Login = {
        email: email,
        username: '',
        firstName: '',
        lastName: '',
        userId: '',
        password: password,
        isGoogle: false
      }
      this.loginService.loginWithEmail(loginModel).subscribe(
        (authModel) => {
          console.log(authModel); 
          localStorage.setItem('accessToken', authModel.accessToken);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Login failed:', error); // Handle login error
          // You might want to display an error message to the user
        });
    }
  }

}
