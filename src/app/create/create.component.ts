import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

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
      `${API_URL}/register`,
      {
        'username' : this.username,
        'password' : this.password
      } ).subscribe(
        data =>{
          this.router.navigate(['/success'])
          this.isInvalid = false
        },
        error => {
          this.isInvalid = true
          this.errorMessage = error.error
          
          console.log(error.error)
        }
      )
  }
}
