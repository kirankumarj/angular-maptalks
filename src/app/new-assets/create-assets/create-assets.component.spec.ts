import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssetsComponent } from './create-assets.component';
import { MaterialModule } from '../../materialModules';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { StoreModule } from '../../../../node_modules/@ngrx/store';
import { AllReducers } from '../../app.reducers';
import { EffectsModule } from '../../../../node_modules/@ngrx/effects';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '../../../../node_modules/@angular/core';

describe('CreateAssetsComponent', () => {
  let component: CreateAssetsComponent;
  let fixture: ComponentFixture<CreateAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAssetsComponent ],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        StoreModule.forRoot(AllReducers),
        EffectsModule.forRoot([]),
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
