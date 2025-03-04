import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [LoginComponent, SignupComponent, CommonModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  constructor(
    private router: Router
  ) {}

  activeTab: string = 'login';

  setTab(tabname: string) {
    this.activeTab = tabname;
  }
}
