import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/register-model';
import { Observable, map } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { JwtModel } from '../models/jwt-model';
import { ApiURL } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient) {
  }

  register(registerPayload: RegisterModel) {
    return this.httpClient.post(ApiURL.signup, registerPayload);
  }

  login(loginPayload: LoginModel): Observable<boolean> {
    return this.httpClient.post<JwtModel>(ApiURL.login, loginPayload).pipe(map(data => {
      debugger;
      localStorage.setItem('jwt', data.jwt);
      localStorage.setItem('username', data.username);
      return true;
    }));
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('username') != null;
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('username');
  }
  
}
