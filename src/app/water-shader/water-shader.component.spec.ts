import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterShaderComponent } from './water-shader.component';

describe('WaterShaderComponent', () => {
  let component: WaterShaderComponent;
  let fixture: ComponentFixture<WaterShaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterShaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterShaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
