import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileApproachRoutingModule } from './mobile-aproach-routing.module';
import { QuestionsFormComponent } from './questions-form/questions-form.component';
import { ResultDetailComponent } from './result-detail/result-detail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MAT_LABEL_GLOBAL_OPTIONS,
  MatCardModule, MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule, MatSlideToggleModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {Data} from './data.service';

@NgModule({
  imports: [
    CommonModule,
    MobileApproachRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  declarations: [
    QuestionsFormComponent,
    ResultDetailComponent
  ],
  exports: [
    QuestionsFormComponent,
    ResultDetailComponent
  ],
  providers: [
    Data,
    {
      provide: MAT_LABEL_GLOBAL_OPTIONS,
      useValue: {
        float: 'always'
      }
    }
  ]
})
export class MobileApproachModule { }
