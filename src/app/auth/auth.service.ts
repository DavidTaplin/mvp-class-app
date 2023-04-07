import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private route: Router,
    private userService: UserService
  ) {}

  signup(movieSignUp: any) {
    console.log('SERVICE HIT', movieSignUp);

    return this.http.post(
      'http://localhost:3000/api/v1/users/create',
      movieSignUp
    );
  }

  login(user: any) {
    return this.http.post('http://localhost:3000/api/v1/users/login', user);
  }

  autoSignIn() {
    // get token from browser
    const token = this.getToken();
    if (!token) {
      return;
    }
    this.http
      .get('http://localhost:3000/api/v1/users/me', {
        headers: {
          Authorization: 'Bearer ' + token.value,
        },
      })
      .subscribe((res: any) => {
        console.log('TOKEN VALUE:', token.value);
        if (res.success) {
          console.log('SUCCESS!!');
          this.userService.setCurrentUser(res.payload.user);
          console.log('RESPONSE AFTER USER SET:', res);
          this.route.navigate(['/home']);
          console.log('CURRENT USER:', this.userService.currentUser);
        }
      });
  }

  logout() {
    const token = this.getToken();

    this.http
      .delete('http://localhost:3000/api/v1/users/logout', {
        headers: {
          Authortization: `Bearer ${token.value}`,
        },
      })
      .subscribe((res: any) => {
        if (res.success) {
          this.removeToken();
          this.userService.setCurrentUser(null);
          this.route.navigate(['/login']);
        }
      });
  }

  getToken() {
    console.log('GET TOKEN', JSON.parse(localStorage.getItem('token')));
    return JSON.parse(localStorage.getItem('token'));
  }

  setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
