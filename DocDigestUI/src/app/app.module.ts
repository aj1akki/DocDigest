import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuard } from './core/guards/auth.guard';
import { SigninOidcComponent } from './core/component/signin-oidc/signin-oidc.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SigninOidcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
