// auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isLoggedIn) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.idToken}`
        }
      });
      console.log(cloned.headers.get('Authorization')); // Verify header set
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
