import { TestBed } from '@angular/core/testing';

import { TreeTableLibService } from './tree-table-lib.service';

describe('TreeTableLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreeTableLibService = TestBed.get(TreeTableLibService);
    expect(service).toBeTruthy();
  });
});
