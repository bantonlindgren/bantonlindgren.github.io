import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubiksCubeShaderComponent } from './rubiks-cube-shader.component';

describe('RubiksCubeShaderComponent', () => {
  let component: RubiksCubeShaderComponent;
  let fixture: ComponentFixture<RubiksCubeShaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubiksCubeShaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubiksCubeShaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
