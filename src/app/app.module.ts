import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { MobileApproachModule } from './mobile-aproach/mobile-aproach.module';
import { LayoutModule } from './layout/layout.module';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatCardModule,
  MatCheckboxModule,
  MatSlideToggleModule
} from '@angular/material';
import {GeneralLayoutComponent} from './layout/general-layout/general-layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {Data} from './mobile-aproach/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MobileApproachModule,
    LayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  entryComponents: [GeneralLayoutComponent],
  providers: [
    Data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
