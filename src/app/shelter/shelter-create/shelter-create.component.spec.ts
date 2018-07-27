import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterCreateComponent } from './shelter-create.component';

describe('ShelterCreateComponent', () => {
  let component: ShelterCreateComponent;
  let fixture: ComponentFixture<ShelterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
