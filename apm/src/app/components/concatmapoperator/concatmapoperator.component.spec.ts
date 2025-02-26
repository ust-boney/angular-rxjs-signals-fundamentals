import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatmapoperatorComponent } from './concatmapoperator.component';

describe('ConcatmapoperatorComponent', () => {
  let component: ConcatmapoperatorComponent;
  let fixture: ComponentFixture<ConcatmapoperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConcatmapoperatorComponent]
    });
    fixture = TestBed.createComponent(ConcatmapoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
