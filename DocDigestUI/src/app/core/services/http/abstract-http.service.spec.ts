import { TestBed } from '@angular/core/testing';

import { AbstractHttpService } from './abstract-http.service';
import { provideHttpClient } from '@angular/common/http';

describe('AbstractHttpService', () => {
  let service: AbstractHttpService<unknown>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [provideHttpClient()]
    });
    service = TestBed.inject(AbstractHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
