import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplerxjsComponent } from './samplerxjs.component';

describe('SamplerxjsComponent', () => {
  let component: SamplerxjsComponent;
  let fixture: ComponentFixture<SamplerxjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SamplerxjsComponent]
    });
    fixture = TestBed.createComponent(SamplerxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
