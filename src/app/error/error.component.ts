import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'The page you are looking for is not available';
  constructor () { }

  ngOnInit (): void {
  }

}
