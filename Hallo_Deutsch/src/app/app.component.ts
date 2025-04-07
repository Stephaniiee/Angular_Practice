import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthenticationComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hallo_Deutsch';
}
