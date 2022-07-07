import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor (private http: HttpClient) { }

  executeJWTAuthentication (username: string, password: string): any {
    return this.http.post<any>(
      `${environment.apiURL}/authenticate`,
      {
        username,
        password
      }
      )
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
  }
  executeBasicAuthentication (username: string, password: string): any {
    const basicAuth = 'Basic ' + window.btoa(`${username}:${password}`);
    const header = new HttpHeaders({
      Authorization: basicAuth
    });
    return this.http.get<AuthenticationBean>(
      `${environment.apiURL}/basic-auth`, { headers: header })
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuth);
            return data;
          }
        )
      );
  }


  getUsername (): string {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  isUserLoggedIn (): boolean {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user == null);
  }
  getAuthenticatedToken (): string {
    if (this.isUserLoggedIn()) {
      return sessionStorage.getItem(TOKEN);
    }
  }
  logout (): void {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
export class AuthenticationBean {
  constructor (public message: string) { }
}
