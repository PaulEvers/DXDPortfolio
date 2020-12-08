import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Sprint3Component } from './sprint3.component';

describe('Sprint3Component', () => {
  let component: Sprint3Component;
  let fixture: ComponentFixture<Sprint3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Sprint3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sprint3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
