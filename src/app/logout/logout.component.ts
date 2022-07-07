import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor (
    private h: BasicAuthenticationService,
    private router: Router
    ) { }

  ngOnInit (): void {
    this.h.logout();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }

}
