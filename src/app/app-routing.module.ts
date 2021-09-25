import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CreatedSuccessfulyComponent } from './created-successfuly/created-successfuly.component';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'success', component: CreatedSuccessfulyComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [RouteGaurdService] },
  { path: 'todos', component: ListTodoComponent, canActivate: [RouteGaurdService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGaurdService] },
  { path: 'todos/:id', component: TodoComponent, canActivate: [RouteGaurdService] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
