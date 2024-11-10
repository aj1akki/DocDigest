// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';

const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin + '/signin-oidc',
  clientId:
    '169743650751-61qa49aagmglvjqtt5i2k5jfv7f1ueok.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
  responseType: 'token id_token',
  showDebugInformation: true,
  sessionChecksEnabled: true,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService, private router: Router) {
    this.configureOAuth();
  }

  private configureOAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.isLoggedIn) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  login() {
    this.oauthService.initImplicitFlow();
    // this.oauthService.events.subscribe(e => {
    //   if (e.type === 'token_received') {
    //     this.router.navigate(['/dashboard']);
    //   }
    // });
  }

  logout() {
    this.oauthService.logOut();
  }

  get isLoggedIn(): boolean {
    return (
      this.oauthService.hasValidIdToken() &&
      this.oauthService.hasValidAccessToken()
    );
  }

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Gets the access token as a string.
   * @returns {string} The access token.
   */
  /******  e5ed07cd-13f7-4098-bbe6-ea4807fa05a8  *******/
  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }

  get idToken(): string {
    return this.oauthService.getIdToken();
  }

  refreshToken() {
    return this.oauthService.silentRefresh();
  }

  handleAuthCallback(): Promise<boolean> {
    return this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      return this.isLoggedIn;
    });
  }
}
