import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
}
