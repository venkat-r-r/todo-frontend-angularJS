import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor () { }
  authenticate (username: string, password: string): boolean
  {
    if (username === 'Venkat' && password === 'Venkat1@')
    {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }
  getUsername (): string{
    return sessionStorage.getItem('authenticatedUser');
  }
  isUserLoggedIn (): boolean
  {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user == null);
  }
  logout (): void
  {
    sessionStorage.removeItem('authenticatedUser');
  }
}
