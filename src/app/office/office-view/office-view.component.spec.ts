import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeViewComponent } from './office-view.component';
import { HttpClientModule } from '@angular/common/http';


describe('OfficeViewComponent', () => {
  let component: OfficeViewComponent;
  let fixture: ComponentFixture<OfficeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeViewComponent ],
      imports:[
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
