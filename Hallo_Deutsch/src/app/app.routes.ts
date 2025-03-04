import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';

export const routes: Routes = [
  {path: 'authentication', component: AuthenticationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  { path: '**', redirectTo: '' }
];
