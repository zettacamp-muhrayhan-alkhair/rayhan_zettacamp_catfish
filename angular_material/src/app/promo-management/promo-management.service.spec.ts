import { TestBed } from '@angular/core/testing';

import { PromoManagementService } from './promo-management.service';

describe('PromoManagementService', () => {
  let service: PromoManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromoManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
