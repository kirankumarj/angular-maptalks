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
  MatTableModule,
  MatCardModule,
  MatDividerModule,
  MatPaginatorModule
} from '@angular/material';
import { IncidentCreateComponent } from './incident/incident-create/incident-create.component';
import { IncidentViewComponent } from './incident/incident-view/incident-view.component';
import { OfficeCreateComponent } from './office/office-create/office-create.component';
import { OfficeViewComponent } from './office/office-view/office-view.component';


const module = [
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatExpansionModule,
  MatTableModule,
  MatCardModule,
  MatDividerModule,
  MatPaginatorModule
];
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    FindComponent,
    ViewComponent,
    IncidentCreateComponent,
    IncidentViewComponent,
    OfficeCreateComponent,
    OfficeViewComponent
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
