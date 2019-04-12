import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckyToolComponent } from './ducky-tool.component';

describe('DuckyToolComponent', () => {
  let component: DuckyToolComponent;
  let fixture: ComponentFixture<DuckyToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckyToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckyToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
