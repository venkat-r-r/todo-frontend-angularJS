import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username,password)
  {
    if(username === 'Venkat' && password == 'Venkat1@')
    {
      sessionStorage.setItem('authenticatedUser',username)
      return true;
    }
    return false;
  }
  getUsername(){
    return sessionStorage.getItem('authenticatedUser')
  }
  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user == null)
  }
  logout()
  {
    sessionStorage.removeItem('authenticatedUser')
  }
}
