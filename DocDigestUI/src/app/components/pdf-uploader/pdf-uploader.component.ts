import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-uploader',
  templateUrl: './pdf-uploader.component.html',
  styleUrls: ['./pdf-uploader.component.scss'],
})
export class PdfUploaderComponent {
  public form: FormGroup;
  public pdfSrc: SafeUrl | null = null;
  public error: string | null = null;
  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.form = this.fb.group({
       pdfFile: [null] 
      });
  }

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file && file.type === 'application/pdf') {
      this.error = null;
      const fileUrl = URL.createObjectURL(file);
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
    } else {
      this.error = 'Please select a valid PDF file.';
    }
  }
}
