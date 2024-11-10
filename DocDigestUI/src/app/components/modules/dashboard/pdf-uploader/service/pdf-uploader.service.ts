import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PdfUploaderService {
  constructor(private http: HttpClient) {}

  uploadPdf(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    // Prepend the base URL from environment
    const apiUrl = `${environment.apiBaseUrl}/pdfUploader/upload`;

    return this.http.post(apiUrl, formData);
  }
}
