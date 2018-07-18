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
import {OrganizationService } from './services/organization.service';
import {RestService } from './services/rest.service';


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
import { IncidentCreateComponent } from './incident/incident-create/incident-create.component';
import { IncidentViewComponent } from './incident/incident-view/incident-view.component';
import { OfficeCreateComponent } from './office/office-create/office-create.component';
import { OfficeViewComponent } from './office/office-view/office-view.component';
import { TestRxjsComponent } from './test-rxjs/test-rxjs.component';
import { PopupComponent } from './popup/popup.component';
import { OrgcreateComponent } from './org/orgcreate/orgcreate.component';
import { OrgviewComponent } from './org/orgview/orgview.component';

import { HttpClientModule } from '@angular/common/http';
import { OverlayDeleteComponent } from './popup/overlay-delete/overlay-delete.component';
import { OverlayUpdateOrgComponent } from './popup/overlay-update-org/overlay-update-org.component';


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
    AppComponent,
    CreateComponent,
    FindComponent,
    ViewComponent,
    IncidentCreateComponent,
    IncidentViewComponent,
    OfficeCreateComponent,
    OfficeViewComponent,
    TestRxjsComponent,
    PopupComponent,
    OrgcreateComponent,
    OrgviewComponent,
    OverlayDeleteComponent,
    OverlayUpdateOrgComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...module,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ...module
  ],
  entryComponents: [
    PopupComponent,
    OverlayDeleteComponent,
    OverlayUpdateOrgComponent
  ],
  providers: [ InfoService, RestService, OrganizationService ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
