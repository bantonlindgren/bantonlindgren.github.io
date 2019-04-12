import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiteComponent } from './spite.component';

describe('SpiteComponent', () => {
  let component: SpiteComponent;
  let fixture: ComponentFixture<SpiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
