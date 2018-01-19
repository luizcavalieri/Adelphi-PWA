import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileApproachRoutingModule } from './mobile-aproach-routing.module';
import { QuestionsFormComponent } from './questions-form/questions-form.component';
import { ResultDetailComponent } from './result-detail/result-detail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MAT_LABEL_GLOBAL_OPTIONS,
  MatIconModule, MatInputModule, MatRadioModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MobileApproachRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule
  ],
  declarations: [QuestionsFormComponent, ResultDetailComponent],
  exports: [QuestionsFormComponent, ResultDetailComponent],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ]
})
export class MobileApproachModule { }
