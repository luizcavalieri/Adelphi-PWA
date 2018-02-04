import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [GeneralLayoutComponent],
  exports: [GeneralLayoutComponent]
})
export class LayoutModule { }
