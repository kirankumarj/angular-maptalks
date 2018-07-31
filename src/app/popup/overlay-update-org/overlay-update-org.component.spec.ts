import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayUpdateOrgComponent } from './overlay-update-org.component';
import {MaterialModule} from '../../materialModules';
import {FormsModule} from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



describe('OverlayUpdateOrgComponent', () => {
  let component: OverlayUpdateOrgComponent;
  let fixture: ComponentFixture<OverlayUpdateOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayUpdateOrgComponent ],
      imports: [
        MaterialModule,
        FormsModule
    ],
    providers: [ ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(OverlayUpdateOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create12', () => {
  //   expect(component).toBeTruthy();
  // });
});
