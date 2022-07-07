import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  customizedMessage = '';
  constructor (private h: BasicAuthenticationService, private service: WelcomeDataService) { }

  ngOnInit (): void {
    this.name = this.h.getUsername();
  }
  getWelcomeMessage (): void
  {
    this.service.executeHelloWorldBeanService().subscribe(
      (response: any) => {this.customizedMessage = response.message; },
      (error: any) => {this.customizedMessage = error.error.message; },
    );
  }
  getWelcomeMessageWithName (): void
  {
    this.service.executeHelloWorldBeanServicePathVariable(this.name).subscribe({
      next: (response: any) => {this.customizedMessage = response.message; },
      error: (err: any) => {this.customizedMessage = err.error.message; },
    });
  }

}
