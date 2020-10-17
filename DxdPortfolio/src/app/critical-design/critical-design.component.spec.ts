import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalDesignComponent } from './critical-design.component';

describe('CriticalDesignComponent', () => {
  let component: CriticalDesignComponent;
  let fixture: ComponentFixture<CriticalDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
