import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaCategoryEditorComponent } from './mia-category-editor.component';

describe('MiaCategoryEditorComponent', () => {
  let component: MiaCategoryEditorComponent;
  let fixture: ComponentFixture<MiaCategoryEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaCategoryEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaCategoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
