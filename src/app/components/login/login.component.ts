import { Router } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/login-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  loginPayload: LoginModel;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.loginPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginPayload.username = this.loginForm.get('username')?.value;
    this.loginPayload.password = this.loginForm.get('password')?.value;

    this.authService.login(this.loginPayload).subscribe(data => {
      if (data) {
        console.log('login success');
        this.router.navigateByUrl('/');
      } else {
        console.log('Login failed');
      }
    });
  }

}
