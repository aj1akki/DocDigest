import { Injectable } from '@angular/core';
import { AbstractHttpService } from 'app/core/services/abstract-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfUploaderService extends AbstractHttpService {

  uploadPdf(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.post('pdfUploader/upload', formData); 
  }
}