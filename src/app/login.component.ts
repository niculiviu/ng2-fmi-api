import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
 user: any= {
    username: '',
    password: ''
  }

  login() {
    console.log(this.user);
  }
}