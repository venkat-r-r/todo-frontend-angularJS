import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { todo } from '../list-todo/list-todo.component';
import { TodoDataService } from '../service/data/todo-data.service';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: todo
  constructor(
    private basicAuthenticationService: BasicAuthenticationService,
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.todo = new todo(this.id, '', new Date(), false)
    if (this.id != 0) {
      this.todoService.retriveTodo(this.basicAuthenticationService.getUsername(), this.id).subscribe(
        data => this.todo = data
      )
    }
  }
  saveTodo() {
    if (this.id == 0) {
      this.todoService.createTodo(this.basicAuthenticationService.getUsername(), this.todo).subscribe(
        data => this.router.navigate(['todos'])
      )
    }
    else {
      this.todoService.updateTodo(this.basicAuthenticationService.getUsername(), this.id, this.todo).subscribe(
        data => {
          this.router.navigate(['todos'])
        }
      )
    }
  }

}
