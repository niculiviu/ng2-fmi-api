import { Component } from '@angular/core';
import { MainService } from './services/main.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {

  constructor(private service: MainService,private router: Router) {

  }

  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }


  register(user) {
    console.log('user', user);
    this.service.registerUser(user)
      .subscribe(response => {
          this.router.navigate(['/login']);
      })
  }


}