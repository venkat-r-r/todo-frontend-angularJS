import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {


  constructor(private basicAuthenticationService: BasicAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = this.basicAuthenticationService.getUsername()
    let basicAuth = this.basicAuthenticationService.getAuthenticatedToken()
    if (username && basicAuth) {
      req = req.clone({ setHeaders: { Authorization: basicAuth } })
    }
    return next.handle(req)
  }
}
