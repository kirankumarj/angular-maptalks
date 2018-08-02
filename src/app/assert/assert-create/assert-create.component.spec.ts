import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertCreateComponent } from './assert-create.component';
import { MaterialModule } from '../../materialModules';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { StoreModule } from '../../../../node_modules/@ngrx/store';
import { AllReducers } from '../../app.reducers';
import { EffectsModule } from '../../../../node_modules/@ngrx/effects';

describe('AssertCreateComponent', () => {
  let component: AssertCreateComponent;
  let fixture: ComponentFixture<AssertCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssertCreateComponent ],
      imports: [
        MaterialModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        StoreModule.forRoot(AllReducers),
        EffectsModule.forRoot([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssertCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('load map method calling', () => {

  });

  it('moveMap method', () => {
    component.loadMap();
    const assert = {
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
    component.moveMap(assert);
  });
});
