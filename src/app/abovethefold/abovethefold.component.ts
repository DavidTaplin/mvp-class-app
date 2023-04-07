import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

import { UserService } from '../auth/user.service';

import { RapidAPIService } from '../shared/api/rapidAPI.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abovethefold',
  templateUrl: './abovethefold.component.html',
  styleUrls: ['./abovethefold.component.css'],
})
export class AbovethefoldComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  authservice: any;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginForm.value);
    const user = this.loginForm.value;

    this.authService.login(user).subscribe((res: any) => {
      console.log(res.payload.user);
      if (res.success) {
        this.userService.setCurrentUser(res.payload.user);
        this.route.navigate(['/home']);
        console.log('YOU ARE IN LOGIN');
        this.authService.setToken(res.payload.token);
        console.log('YOUR TOKEN: ', res.payload.token);
        console.log(res);
      }
    });
  }

  onSubmit2() {
    const loginuser = this.loginForm.value;

    console.log('LOGIN CLICKED', loginuser);

    this.authService.login(loginuser).subscribe((res: any) => {
      if (res.success) {
        this.userService.setCurrentUser(res.payload.user);
        console.log('LOGIN SUCCESS:', res.payload.user);
      }
      this.userService.setCurrentUser(res.payload.user);
    });
  }
}
