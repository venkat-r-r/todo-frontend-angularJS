import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

export class todo {

  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public done: boolean,
  ) { }

}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  message : string
  error : string
  
  todos : todo[]
  // [
  //   new todo(1, "Learn to dance", new Date(), false),
  //   new todo(2, "Become an expert", new Date(), false),
  //   new todo(3, "Visit Australia", new Date(), false)
  // ]
  constructor(
    private route : Router,
    private todoServices : TodoDataService,
    private basicAuthenticationService : BasicAuthenticationService,
  ) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos()
  {
    this.todoServices.retriveAllTodos(this.basicAuthenticationService.getUsername()).subscribe(
      response => {this.todos = response}
    )
  }
  deleteTodo(id : number)
  {
    this.todoServices.deleteTodo(this.basicAuthenticationService.getUsername(),id).subscribe({
      next: response => {
         this.message = 'Delete successful'
         this.refreshTodos()
       },
       error: _ => this.error = 'Error'
    }
       
    )
  }
  updateTodo(id : number)
  {
    this.route.navigate(['todos/',id])
  }
  addTodo()
  {
    this.route.navigate(['todos/',0])
  }
  isComplete(id : number,todo : todo)
  {
    todo.done = !todo.done
    this.todoServices.updateTodo(this.basicAuthenticationService.getUsername(), id,todo).subscribe(
    _ => {
        this.route.navigate(['todos'])
      }
    )
  }
}
