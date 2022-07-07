import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  isInvalid = false;


  constructor (
    public basicAuthenticationService: BasicAuthenticationService,
    private router: Router,
    ){ }

  ngOnInit (): void {
  }
  handleBasicAuthLogin (): void
  {
    this.basicAuthenticationService.executeBasicAuthentication(this.username, this.password)
    .subscribe({
      next : data => {
        this.router.navigate(['welcome']);
      },
      error: error => {
        console.log(error);
        this.isInvalid = true;
      }
    });
  }
  handleJWTAuthLogin (): void
  {
    this.basicAuthenticationService.executeJWTAuthentication(this.username, this.password)
    .subscribe({
      next: data => {
        this.router.navigate(['welcome']);
      },
      error: error => {
        console.log(error);
        this.isInvalid = true;
      }
    });
  }
}
