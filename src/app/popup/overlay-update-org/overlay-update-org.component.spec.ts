import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayUpdateOrgComponent } from './overlay-update-org.component';
import {MaterialModule} from '../../materialModules';
import {FormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';



describe('OverlayUpdateOrgComponent', () => {
  let component: OverlayUpdateOrgComponent;
  let fixture: ComponentFixture<OverlayUpdateOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayUpdateOrgComponent ],
      imports:[
        MaterialModule,
        FormsModule,
        MAT_DIALOG_DATA
    ],
    providers: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayUpdateOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
