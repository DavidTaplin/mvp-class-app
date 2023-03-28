import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')

})
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const loginuser = this.loginForm.value;
    console.log(loginuser)
    this.authservice.login(loginuser).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
