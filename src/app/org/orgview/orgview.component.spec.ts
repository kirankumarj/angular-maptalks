import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgviewComponent } from './orgview.component';
import {MaterialModule} from '../../materialModules';
import { HttpClientModule } from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AllReducers} from '../../app.reducers';
import {CommonModule} from '@angular/common';





describe('OrgviewComponent', () => {
  let component: OrgviewComponent;
  let fixture: ComponentFixture<OrgviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgviewComponent ],
      imports:[
        MaterialModule,
        HttpClientModule,
        CommonModule,
        StoreModule.forRoot(AllReducers),
        EffectsModule.forRoot([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
