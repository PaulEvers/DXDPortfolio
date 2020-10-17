import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovumComponent } from './novum.component';

describe('NovumComponent', () => {
  let component: NovumComponent;
  let fixture: ComponentFixture<NovumComponent>;

  beforeEach(async(() => {
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
