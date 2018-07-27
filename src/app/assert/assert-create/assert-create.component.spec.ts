import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertCreateComponent } from './assert-create.component';

describe('AssertCreateComponent', () => {
  let component: AssertCreateComponent;
  let fixture: ComponentFixture<AssertCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssertCreateComponent ]
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
});
