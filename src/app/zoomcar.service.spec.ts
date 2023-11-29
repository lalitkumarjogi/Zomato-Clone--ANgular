import { TestBed } from '@angular/core/testing';

import { ZoomcarService } from './zoomcar.service';

describe('ZoomcarService', () => {
  let service: ZoomcarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoomcarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
