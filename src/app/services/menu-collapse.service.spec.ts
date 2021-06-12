import { TestBed } from '@angular/core/testing';

import { MenuCollapseService } from './menu-collapse.service';

describe('MenuCollapseService', () => {
  let service: MenuCollapseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuCollapseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
