import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private h :BasicAuthenticationService) { }

  ngOnInit(): void {
    this.h.logout()
  }

}
