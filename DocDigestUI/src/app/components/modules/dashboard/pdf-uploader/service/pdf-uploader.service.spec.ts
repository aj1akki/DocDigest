import { TestBed } from '@angular/core/testing';

import { PdfUploaderService } from './pdf-uploader.service';

describe('PdfUploaderService', () => {
  let service: PdfUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
