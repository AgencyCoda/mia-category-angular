import { TestBed } from '@angular/core/testing';

import { MiaCategoryEditorService } from './mia-category-editor.service';

describe('MiaCategoryEditorService', () => {
  let service: MiaCategoryEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaCategoryEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
