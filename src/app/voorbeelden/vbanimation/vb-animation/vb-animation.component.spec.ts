import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VbAnimationComponent } from './vb-animation.component';

describe('VbAnimationComponent', () => {
  let component: VbAnimationComponent;
  let fixture: ComponentFixture<VbAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VbAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VbAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
