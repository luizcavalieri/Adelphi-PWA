import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import {AppComponent} from './app.component';
import {QuestionsFormComponent} from './mobile-aproach/questions-form/questions-form.component';

const indexRoute: Route = {
  path: '/test',
  redirectTo: '/mobile-approach',
  pathMatch: 'full'
};

const routes: Routes = [
  indexRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
