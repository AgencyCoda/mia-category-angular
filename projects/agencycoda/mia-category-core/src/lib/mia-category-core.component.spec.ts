import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaCategoryCoreComponent } from './mia-category-core.component';

describe('MiaCategoryCoreComponent', () => {
  let component: MiaCategoryCoreComponent;
  let fixture: ComponentFixture<MiaCategoryCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaCategoryCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaCategoryCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
