import { TestBed, async, inject } from '@angular/core/testing';

import { RouatingGuard } from './rouating.guard';

describe('RouatingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouatingGuard]
    });
  });

  it('should ...', inject([RouatingGuard], (guard: RouatingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
