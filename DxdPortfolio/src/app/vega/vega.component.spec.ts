import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VegaComponent } from './vega.component';

describe('VegaComponent', () => {
  let component: VegaComponent;
  let fixture: ComponentFixture<VegaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
