import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login();
  }
  ngOnInit() {
    // If already authenticated, redirect to dashboard
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }
}
