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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create organization', () => {
    expect(component.createOrganization()).toBeFalsy();
  });

  it('moveMap method', () => {
    component.loadMap();
    const newOrg = {
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
    const ref = this;
    component.moveMap(newOrg);
  });

  it('should get AllOrganizations', () => {
    expect(component.getAllOrganizations());
  });

  it('should get searchMapLocationBySearchData', () => {
    this.searchAddress = 'Hyderabad';
    expect(component.searchMapLocationBySearchData());
  });

});
