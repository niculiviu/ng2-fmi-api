import { Component } from '@angular/core';
import { MainService } from './services/main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
 user: any= {
    username: '',
    pass: ''
  }

  constructor(private mainService:MainService,private router:Router){

  }

  login() {

    this.router.navigate(['/dashboard',this.user.username]);
    // this.mainService.loginUser(this.user)
    // .subscribe(response=>{
    //   console.log(response);
    // });
  }
}