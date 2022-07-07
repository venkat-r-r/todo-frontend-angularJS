import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todo/list-todo.component';
import { TodoDataService } from '../service/data/todo-data.service';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  constructor(
    private basicAuthenticationService: BasicAuthenticationService,
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = parseInt (this.route.snapshot.params.id, 10);
    this.todo = new Todo(this.id, '', new Date(), false);
    if (this.id !== 0) {
      this.todoService.retrieveTodo(this.basicAuthenticationService.getUsername(), this.id).subscribe(
        (data: Todo) => this.todo = data
      );
    }
  }
  saveTodo(): void {
    if (this.id === 0) {
      this.todoService.createTodo(this.basicAuthenticationService.getUsername(), this.todo).subscribe(
        (data: any) => this.router.navigate(['todos'])
      );
    }
    else {
      this.todoService.updateTodo(this.basicAuthenticationService.getUsername(), this.id, this.todo).subscribe(
        (data: any) => {
          this.router.navigate(['todos']);
        }
      );
    }
  }

}
