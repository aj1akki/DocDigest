import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfUploaderComponent } from './pdf-uploader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

describe('PdfUploaderComponent', () => {
  let component: PdfUploaderComponent;
  let fixture: ComponentFixture<PdfUploaderComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfUploaderComponent], 
      imports: [ReactiveFormsModule, BrowserModule], 
      providers: [DomSanitizer]
    });
    fixture = TestBed.createComponent(PdfUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
