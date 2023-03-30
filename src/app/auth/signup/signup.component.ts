import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    email: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl('')
  })
  authService: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const movieSignUp = this.signupForm.value;
    console.log(movieSignUp)

    this.authService.signup(movieSignUp).subscribe((res:any) => {})

  }
}
