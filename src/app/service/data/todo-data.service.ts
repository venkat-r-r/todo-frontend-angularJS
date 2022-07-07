import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from '../../list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }
  retrieveAllTodos(user: string): any {
    return this.http.get<Todo[]>(`${environment.apiURL}/users/${user}/todos`, );
  }

  deleteTodo(user: string, id: number): any {
    return this.http.delete(`${environment.apiURL}/users/${user}/todos/${id}`, );
  }

  retrieveTodo(user: string, id: number): any {
    return this.http.get<Todo>(`${environment.apiURL}/users/${user}/todos/${id}`, );
  }

  updateTodo(user: string, id: number, todo: Todo): any {
    return this.http.put(`${environment.apiURL}/users/${user}/todos/${id}`, todo);
  }

  createTodo(user: string, todo: Todo): any {
    return this.http.post(`${environment.apiURL}/users/${user}/todos/`, todo);
  }
}
