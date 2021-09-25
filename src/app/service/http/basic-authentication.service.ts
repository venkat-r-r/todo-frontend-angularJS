import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { API_URL } from 'src/app/app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }
  
  executeJWTAuthentication(username, password) {
    return this.http.post<any>(
      `${API_URL}/authenticate`,
      {
        username,
        password
      } 
      )
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
            return data
          }
        )
      )
  }
  executeBasicAuthentication(username, password) {
    let basicAuth = 'Basic ' + window.btoa(username+':'+password)
    let header = new HttpHeaders({
      Authorization: basicAuth
    })
    return this.http.get<AuthenticationBean>(
      `${API_URL}/basic-auth`, { headers: header })
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, basicAuth)
            return data
          }
        )
      )
  }


  getUsername() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user == null)
  }
  getAuthenticatedToken() {
    if (this.isUserLoggedIn())
      return sessionStorage.getItem(TOKEN)
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}
export class AuthenticationBean {
  constructor(public message: string) { }
}
