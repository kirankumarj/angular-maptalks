import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { FindComponent } from './find/find.component';
import { ViewComponent } from './view/view.component';

import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { InfoService } from './info.service';



import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatExpansionModule,
  MatTableModule
} from '@angular/material';


const module = [
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatExpansionModule,
  MatTableModule
];
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    FindComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...module,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ...module
  ],
  providers: [ InfoService ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
