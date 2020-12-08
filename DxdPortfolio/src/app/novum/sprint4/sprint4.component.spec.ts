import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Sprint4Component } from './sprint4.component';

describe('Sprint4Component', () => {
  let component: Sprint4Component;
  let fixture: ComponentFixture<Sprint4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Sprint4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sprint4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
