import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayDeleteComponent } from './overlay-delete.component';
import {MaterialModule} from '../../materialModules';


describe('OverlayDeleteComponent', () => {
  let component: OverlayDeleteComponent;
  let fixture: ComponentFixture<OverlayDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayDeleteComponent ],
      imports:[
        MaterialModule
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
