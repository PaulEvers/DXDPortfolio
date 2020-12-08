import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NovumComponent } from './novum.component';

describe('NovumComponent', () => {
  let component: NovumComponent;
  let fixture: ComponentFixture<NovumComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NovumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
