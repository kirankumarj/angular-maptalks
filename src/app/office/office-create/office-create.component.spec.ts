import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeCreateComponent } from './office-create.component';
import {MaterialModule} from '../../materialModules';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




describe('OfficeCreateComponent', () => {
  let component: OfficeCreateComponent;
  let fixture: ComponentFixture<OfficeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        OfficeCreateComponent        
       ],
       imports:[
        MaterialModule,
        FormsModule,
        HttpClientModule
       ]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeCreateComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
