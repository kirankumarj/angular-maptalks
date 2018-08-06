import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InfoService } from './info.service';
import {OrganizationService } from './services/organization.service';
import {RestService } from './services/rest.service';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AllReducers} from './app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {OrgnizationEffects} from './org/store/org.effects';
import {MaterialModule} from './materialModules';


// import {
//   MatButtonModule,
//   MatCheckboxModule,
//   MatGridListModule,
//   MatMenuModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatRippleModule,
//   MatExpansionModule,
//   MatTableModule,
//   MatCardModule,
//   MatDividerModule,
//   MatPaginatorModule,
//   MatSnackBarModule,
//   MatIconModule,
//   MatDialogModule,
//   MatSelectModule
// } from '@angular/material';
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
import { OrgupdateComponent } from './org/orgupdate/orgupdate.component';
import { AssertCreateComponent } from './assert/assert-create/assert-create.component';
import { AssertViewComponent } from './assert/assert-view/assert-view.component';
import { ResourceCreateComponent } from './resource/resource-create/resource-create.component';
import { ResourceViewComponent } from './resource/resource-view/resource-view.component';
import { ShelterCreateComponent } from './shelter/shelter-create/shelter-create.component';
import { ShelterViewComponent } from './shelter/shelter-view/shelter-view.component';
import { CreateAssetsComponent } from './new-assets/create-assets/create-assets.component';
import { AssetsService } from './services/assets/assets.service';
import { AssetsEffects } from './new-assets/store/assets.effects';



// const module = [
//   MatButtonModule,
//   MatCheckboxModule,
//   MatGridListModule,
//   MatMenuModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatRippleModule,
//   MatExpansionModule,
//   MatTableModule,
//   MatCardModule,
//   MatDividerModule,
//   MatPaginatorModule,
//   MatSnackBarModule,
//   MatIconModule,
//   MatDialogModule,
//   MatSelectModule
// ];
@NgModule({
  declarations: [
    AppComponent,
    IncidentCreateComponent,
    IncidentViewComponent,
    OfficeCreateComponent,
    OfficeViewComponent,
    TestRxjsComponent,
    PopupComponent,
    OrgcreateComponent,
    OrgviewComponent,
    OverlayDeleteComponent,
    OverlayUpdateOrgComponent,
    OrgupdateComponent,
    AssertCreateComponent,
    AssertViewComponent,
    ResourceCreateComponent,
    ResourceViewComponent,
    ShelterCreateComponent,
    ShelterViewComponent,
    CreateAssetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(AllReducers),
    EffectsModule.forRoot([OrgnizationEffects,AssetsEffects]),
    StoreDevtoolsModule.instrument(
     {
       maxAge: 25
      }
    )
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [
    PopupComponent,
    OverlayDeleteComponent,
    OverlayUpdateOrgComponent
  ],
  providers: [ InfoService, RestService, OrganizationService ,AssetsService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
