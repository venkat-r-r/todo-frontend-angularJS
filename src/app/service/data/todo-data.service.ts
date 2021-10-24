import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { todo } from '../../list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }
  retriveAllTodos(user: String) {
    return this.http.get<todo[]>(`${environment.apiURL}/users/${user}/todos`,)
  }

  deleteTodo(user: String, id: number) {
    return this.http.delete(`${environment.apiURL}/users/${user}/todos/${id}`,)
  }

  retriveTodo(user: String, id: number) {
    return this.http.get<todo>(`${environment.apiURL}/users/${user}/todos/${id}`,)
  }

  updateTodo(user: string, id: number, todo: todo) {
    return this.http.put(`${environment.apiURL}/users/${user}/todos/${id}`, todo)
  }

  createTodo(user: string, todo: todo) {
    return this.http.post(`${environment.apiURL}/users/${user}/todos/`, todo)
  }
}
