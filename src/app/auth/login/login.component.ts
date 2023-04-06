import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authservice: AuthService, private userService:UserService, private route:Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const loginuser = this.loginForm.value;
    this.authservice.login(loginuser).subscribe((res: any) => {
      if(res.success){
        this.userService.setCurrentUser(res.payload.user)
        this.route.navigate(['/home'])
        this.authservice.setToken(res.payload.token)
        console.log(res)
      }
    });
  }
}
