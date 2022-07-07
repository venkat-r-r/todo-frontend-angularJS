import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  toggleNavbar = false;

  constructor (public h: BasicAuthenticationService) { }

  ngOnInit (): void {
  }
}
