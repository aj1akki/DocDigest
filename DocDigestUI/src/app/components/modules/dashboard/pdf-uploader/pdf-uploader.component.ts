import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { PdfUploaderService } from './service/pdf-uploader.service';

@Component({
  selector: 'app-pdf-uploader',
  templateUrl: './pdf-uploader.component.html',
  styleUrls: ['./pdf-uploader.component.scss'],
})
export class PdfUploaderComponent {
  public form: FormGroup;
  public pdfSrc: SafeUrl | null = null;
  public error: string | null = null;
  public iframeHeight: number |null = null;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer,private pdfUploaderService: PdfUploaderService) {
    this.form = this.fb.group({
      pdfFile: [null]
    });
  }

  ngOnInit() {
    this.calculateIframeHeight();
  }

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file && (file.type === 'application/pdf')) {
      this.error = null;
      this.pdfUploaderService.uploadPdf(file).subscribe({
        next: (response:any) => {
          console.log('Upload successful', response);
        },
        error: (error: any) => {
          console.error('Upload failed', error);
        }
      });
      const fileUrl = URL.createObjectURL(file);
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
      
      
    } else {
      this.error = 'Please select a valid PDF or DOCX file.';
    }
  }

  private calculateIframeHeight() {
    const offset = 125; // Adjust this offset as needed to match your layout
    this.iframeHeight = window.innerHeight - offset;
  }
}
