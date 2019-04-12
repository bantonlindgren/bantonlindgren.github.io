import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaToolComponent } from './mega-tool.component';

describe('MegaToolComponent', () => {
  let component: MegaToolComponent;
  let fixture: ComponentFixture<MegaToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
