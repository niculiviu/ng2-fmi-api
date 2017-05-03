import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {RegisterComponent} from './register.component';
import {LoginComponent} from './login.component';

import {MainService} from './services/main.service';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewTaskComponentComponent } from './components/new-task-component/new-task-component.component';
import { TaskComponentComponent } from './components/task-component/task-component.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    NewTaskComponentComponent,
    TaskComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path:'dashboard/:userEmail',
        component:DashboardComponent
      }
    ])
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
