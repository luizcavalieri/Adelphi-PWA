import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionsFormComponent} from './questions-form/questions-form.component';
import {MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material';

const routes: Routes = [
  {
    path: 'mobile-approach',
    component: QuestionsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileApproachRoutingModule { }
