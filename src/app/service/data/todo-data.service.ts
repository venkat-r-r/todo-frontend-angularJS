import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_JPA_URL } from 'src/app/app.constants';
import { todo } from '../../list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }
  retriveAllTodos(user: String) {
    return this.http.get<todo[]>(`${API_JPA_URL}/users/${user}/todos`,)
  }

  deleteTodo(user: String, id: number) {
    return this.http.delete(`${API_JPA_URL}/users/${user}/todos/${id}`,)
  }

  retriveTodo(user: String, id: number) {
    return this.http.get<todo>(`${API_JPA_URL}/users/${user}/todos/${id}`,)
  }

  updateTodo(user: string, id: number, todo: todo) {
    return this.http.put(`${API_JPA_URL}/users/${user}/todos/${id}`, todo)
  }

  createTodo(user: string, todo: todo) {
    return this.http.post(`${API_JPA_URL}/users/${user}/todos/`, todo)
  }
}
