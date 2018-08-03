import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NgModule, ModuleWithProviders} from '@angular/core';

import { OrgcreateComponent } from './orgcreate.component';
import {MaterialModule} from '../../materialModules';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AllReducers} from '../../app.reducers';
import {CommonModule} from '@angular/common';
import { PopupComponent } from '../../popup/popup.component';
import { environment } from '../../../environments/environment';


@NgModule({
  declarations: [PopupComponent],
  entryComponents: [
    PopupComponent,
  ]
})
class TestModule1 {}

class TestModule {}
describe('OrgcreateComponent', () => {
  let component: OrgcreateComponent;
  let fixture: ComponentFixture<OrgcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgcreateComponent ],
      imports: [
        MaterialModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        StoreModule.forRoot(AllReducers),
        EffectsModule.forRoot([]),
        TestModule1
      ],
      providers: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgcreateComponent);
    component = fixture.componentInstance;
   fixture.detectChanges();
  });

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
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('moveMap method test case', () => {
    component.loadMap();
    component.moveMap(newObject);
  });

  it('Org Create :: Save Org method test case', () => {
    component.loadMap();
    this.newOrg = newObject;
    component.saveOrg();
  });
  it('Org Create :: get AllOrganizations test case', () => {
    component.loadMap();
    this.newOrg = newObject;
    component.getAllOrganizations();
  });
  it('Org Create :: create Organization method test case', () => {
    component.loadMap();
    this.newOrg = newObject;
    component.createOrganization();
  });
  it('Org Create :: ngAfterViewInit method test case', () => {
    component.loadMap();
    this.newOrg = newObject;
    component.ngAfterViewInit();
  });
  it('Org Create :: get Status method test case', () => {
    component.loadMap();
    this.newOrg = newObject;
    component.getStatus();
  });
  it('Org Create :: next Step method & previous Step test case', () => {
    component.loadMap();
    this.newOrg = newObject;
    component.nextStep();
    component.prevStep();
  });

  it('Org Create :: searchMapLocationBySearchData method test case', () => {
    component.loadMap();
    this.newOrg = newObject;
    component.searchMapLocationBySearchData();
  });

  it('Org Create :: service flag true test case (calls real API) ', () => {
    component.loadMap();
    this.newOrg = newObject;
    environment.isDataAvailableInRealService = true;
    component.saveOrg();
    component.getAllOrganizations();
    component.createOrganization();
    component.ngAfterViewInit();
    component.getStatus();
    component.nextStep();
    component.prevStep();
    component.searchMapLocationBySearchData();
    environment.isDataAvailableInRealService = false;
  });

});
