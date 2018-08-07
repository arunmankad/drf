import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatInputModule, MatFormFieldModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DynamicFormComponent } from './components/dynamicform/dynamicform.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicformComponent,
    // DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
