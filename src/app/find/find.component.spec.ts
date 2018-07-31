import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FindComponent } from './find.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {
//   MatButtonModule,
//   MatCheckboxModule,
//   MatGridListModule,
//   MatMenuModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatRippleModule,
//   MatExpansionModule,
//   MatTableModule,
//   MatCardModule,
//   MatDividerModule,
//   MatPaginatorModule,
//   MatSnackBarModule,
//   MatIconModule,
//   MatDialogModule
// } from '@angular/material';
import {MaterialModule} from '../materialModules';

describe('FindComponent', () => {
  let component: FindComponent;
  let fixture: ComponentFixture<FindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindComponent ],
      imports:[
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
