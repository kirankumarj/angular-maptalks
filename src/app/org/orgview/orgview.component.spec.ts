import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgviewComponent } from './orgview.component';
import {MaterialModule} from '../../materialModules';
import { HttpClientModule } from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AllReducers} from '../../app.reducers';
import {CommonModule} from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PopupComponent } from '../../popup/popup.component';
import { OverlayUpdateOrgComponent } from '../../popup/overlay-update-org/overlay-update-org.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [PopupComponent],
  entryComponents: [
    PopupComponent,
  ],
  imports: [
  ]
})
class TestModulePopupComponent {}

@NgModule({
  declarations: [OverlayUpdateOrgComponent],
  entryComponents: [
    OverlayUpdateOrgComponent,
  ],
  imports: [
    FormsModule,
    MatDialogModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
class TestModuleOverLay {}


describe('OrgviewComponent', () => {
  let component: OrgviewComponent;
  let fixture: ComponentFixture<OrgviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgviewComponent ],
      imports: [
        FormsModule,
        MaterialModule,
        HttpClientModule,
        CommonModule,
        StoreModule.forRoot(AllReducers),
        EffectsModule.forRoot([]),
        TestModulePopupComponent,
        TestModuleOverLay,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(OrgviewComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  // it('should create', () => {
  //   // expect(component).toBeTruthy();
  // });

  const newObject = {
    name: '',
    lat: '78.498',
    lon: '17.476',
    type: '',
    info: '',
    display_name: '',
    address: {
      city: '',
      country: '',
      postcode: '',
      state: '',
      state_district: ''
    }
  };
  // it('Org View :: ngAfterViewInit method calling', () => {
  //   // component.updateRecord(newObject);
  //   // expect(component).toBeTruthy();
  // });
});
