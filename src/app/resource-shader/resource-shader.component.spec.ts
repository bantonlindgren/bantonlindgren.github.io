import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceShaderComponent } from './resource-shader.component';

describe('ResourceShaderComponent', () => {
  let component: ResourceShaderComponent;
  let fixture: ComponentFixture<ResourceShaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceShaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceShaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
