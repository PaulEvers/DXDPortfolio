import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcdComponent } from './hcd.component';

describe('HcdComponent', () => {
  let component: HcdComponent;
  let fixture: ComponentFixture<HcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
