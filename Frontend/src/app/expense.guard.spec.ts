import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ExpenseGuard } from './expense.guard';

describe('ExpenseGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ExpenseGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
