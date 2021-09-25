import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Venkat'
  password = ''
  errorMessage ='Invalid Credentials'
  isInvalid = false
  

  constructor(
    public basicAuthenticationService: BasicAuthenticationService,
    private router : Router, 
    ){ }

  ngOnInit(): void {
  }
  handleBasicAuthLogin()
  {
    this.basicAuthenticationService.executeBasicAuthentication(this.username,this.password)
    .subscribe(
      data => {
        this.router.navigate(['welcome'])
      },
      error => {
        console.log(error)
         this.isInvalid = true
      }
    )
  }
  handleJWTAuthLogin()
  {
    this.basicAuthenticationService.executeJWTAuthentication(this.username,this.password)
    .subscribe(
      data => {
        this.router.navigate(['welcome'])
      },
      error => {
        console.log(error)
         this.isInvalid = true
      }
    )
  }
}
