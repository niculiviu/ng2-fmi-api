import { Component } from '@angular/core';
import {MainService} from './services/main.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
 
 constructor(private service:MainService){

 }
 
 user:any={
   firstName:'',
   lastName:'',
   email:'',
   password:''
 }


 register(user){
   console.log('user',user);
    this.service.registerUser(user)
    .subscribe(response=>console.log('response:',response))
 }


}