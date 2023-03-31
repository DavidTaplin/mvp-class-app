import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onSubmit() {
    const loginuser = this.loginForm.value;

    console.log('LOGIN CLICKED', loginuser);

    this.authService.login(loginuser).subscribe((res: any) => {
      console.log(res.payload.user);
      if (res.success) {
        console.log('SUCCESS: ', res);
      }
    });
  }
}
