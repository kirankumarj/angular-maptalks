import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertViewComponent } from './assert-view.component';

describe('AssertViewComponent', () => {
  let component: AssertViewComponent;
  let fixture: ComponentFixture<AssertViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssertViewComponent ]
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
