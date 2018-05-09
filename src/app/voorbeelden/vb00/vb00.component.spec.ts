import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vb00Component } from './vb00.component';

describe('Vb00Component', () => {
  let component: Vb00Component;
  let fixture: ComponentFixture<Vb00Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vb00Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vb00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
