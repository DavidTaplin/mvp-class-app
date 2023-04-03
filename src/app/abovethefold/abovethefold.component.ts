import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

import { UserService } from '../auth/user.service';

import { RapidAPIService } from '../shared/api/rapidAPI.service';


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
    private RapidAPIService: RapidAPIService,
    private userService:UserService
  ) {}

  ngOnInit(): void {
    this.RapidAPIService.searchMoviesAPI('bad boys');
  }
 fd528e7b049ae5ad5d70aeca190688658a841164

  onSubmit() {
    const loginuser = this.loginForm.value;

    console.log('LOGIN CLICKED', loginuser);

    this.authService.login(loginuser).subscribe((res: any) => {
      if (res.success){
        this.userService.setCurrentUser(res.payload.user)


      }
      this.userService.setCurrentUser(res.payload.user)

    });
  }
}
