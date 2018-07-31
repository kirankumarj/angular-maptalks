import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayDeleteComponent } from './overlay-delete.component';
import {MaterialModule} from '../../materialModules';
import { CUSTOM_ELEMENTS_SCHEMA } from '../../../../node_modules/@angular/core';


describe('OverlayDeleteComponent', () => {
  let component: OverlayDeleteComponent;
  let fixture: ComponentFixture<OverlayDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayDeleteComponent ],
      imports: [
        MaterialModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
