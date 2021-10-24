import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  username : String
  password : String
  errorMessage = 'Username already exists'
  isInvalid = false
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.username = ''
    this.password = ''
  }
  createAccount(){
    this.http.post<any>(
      `${environment.apiURL}/register`,
      {
        'username' : this.username,
        'password' : this.password
      } ).subscribe({
        next: _ =>{
          this.router.navigate(['/success'])
          this.isInvalid = false
        },
        error: error => {
          this.isInvalid = true
          this.errorMessage = error.error
          
          console.log(error.error)
        }
      }
        
      )
  }
}
