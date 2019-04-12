import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathAndDecayComponent } from './death-and-decay.component';

describe('DeathAndDecayComponent', () => {
  let component: DeathAndDecayComponent;
  let fixture: ComponentFixture<DeathAndDecayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathAndDecayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathAndDecayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
