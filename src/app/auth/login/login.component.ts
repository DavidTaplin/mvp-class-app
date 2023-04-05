import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';


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
  constructor(private authservice: AuthService, private userService:UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    const loginuser = this.loginForm.value;
    this.authservice.login(loginuser).subscribe((res: any) => {
      if(res.success){
        this.userService.setCurrentUser(res.payload.user);
      }
    });
  }
}
