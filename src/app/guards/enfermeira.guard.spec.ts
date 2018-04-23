import { TestBed, async, inject } from '@angular/core/testing';

import { EnfermeiraGuard } from './enfermeira.guard';

describe('EnfermeiraGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnfermeiraGuard]
    });
  });

  it('should ...', inject([EnfermeiraGuard], (guard: EnfermeiraGuard) => {
    expect(guard).toBeTruthy();
  }));
});
