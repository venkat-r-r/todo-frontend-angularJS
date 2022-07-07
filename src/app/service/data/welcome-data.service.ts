import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class HelloWorldBean{
  constructor (public message: string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor (private http: HttpClient ) { }
  executeHelloWorldBeanService (): any
  {
    return this.http.get<HelloWorldBean>(`${environment.apiURL}/hello-world-bean/`, );
  }
  executeHelloWorldBeanServicePathVariable (name: string): any
  {
    return this.http.get<HelloWorldBean>(`${environment.apiURL}/hello-world/${name}`);
  }
}
