import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Sprint2Component } from './sprint2.component';

describe('Sprint2Component', () => {
  let component: Sprint2Component;
  let fixture: ComponentFixture<Sprint2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Sprint2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sprint2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
