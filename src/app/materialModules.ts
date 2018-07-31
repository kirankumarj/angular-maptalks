import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
  MatPaginatorModule,
  MatSnackBarModule,
  MatIconModule,
  MatDialogModule
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
  MatTableModule,
  MatCardModule,
  MatDividerModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatIconModule,
  MatDialogModule
];
@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...module,
    
  ],
  exports: [
    ...module
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class MaterialModule { }
