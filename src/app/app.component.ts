import { Component } from '@angular/core';
import {MainService} from './services/main.service';
import {User} from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MainService]
})
export class AppComponent {
  title = 'app works!yeeeeyy';
  users:User[];
  constructor (private mainService: MainService) {}

  ngOnInit() {
      this.mainService.getHeroes().subscribe(
        response => this.users=response)
  }
}
