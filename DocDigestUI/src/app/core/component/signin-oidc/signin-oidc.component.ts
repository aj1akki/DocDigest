import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth/auth.service';

@Component({
  selector: 'app-signin-oidc',
  templateUrl: './signin-oidc.component.html',
  styleUrls: ['./signin-oidc.component.scss']
})
export class SigninOidcComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.handleAuthCallback().then((isLoggedIn) => {
      setTimeout(() => {
        if (isLoggedIn) {
          // Successfully logged in, navigate to the dashboard
          this.router.navigate(['/dashboard']);
        } else {
          // Login failed, redirect to home
          this.router.navigate(['/']);
        }
      }, 5); 
    });
  }
}
