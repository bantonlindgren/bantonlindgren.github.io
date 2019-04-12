import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsConverterToolComponent } from './dds-converter-tool.component';

describe('DdsConverterToolComponent', () => {
  let component: DdsConverterToolComponent;
  let fixture: ComponentFixture<DdsConverterToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdsConverterToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdsConverterToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
