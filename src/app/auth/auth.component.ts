import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData } from './shared/models/authResponse';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  isLogginMode: boolean = true;
  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  onSwitchMode() {
    this.isLogginMode = !this.isLogginMode;
  }

  auth(authForm: NgForm) {
    const email = authForm.value.email;
    const password = authForm.value.password;
    this.authService.signUp(email, password).subscribe(response => {
      console.log(response);
      authForm.reset();
    })
  }
}
