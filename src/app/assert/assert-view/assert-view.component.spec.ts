import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertViewComponent } from './assert-view.component';
import { MaterialModule } from '../../materialModules';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { StoreModule } from '../../../../node_modules/@ngrx/store';
import { AllReducers } from '../../app.reducers';
import { EffectsModule } from '../../../../node_modules/@ngrx/effects';

describe('AssertViewComponent', () => {
  let component: AssertViewComponent;
  let fixture: ComponentFixture<AssertViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssertViewComponent ],
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
    fixture = TestBed.createComponent(AssertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
