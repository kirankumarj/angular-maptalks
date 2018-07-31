import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatExpansionModule,
  MatTableModule,
  MatCardModule,
  MatDividerModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';





describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
      imports: [
        MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatExpansionModule,
  MatTableModule,
  MatCardModule,
  MatDividerModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatIconModule,
  MatDialogModule,
        FormsModule,
        
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
