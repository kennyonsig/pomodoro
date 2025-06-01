import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantVisualizer } from './plant-visualizer';

describe('PlantVisualizer', () => {
  let component: PlantVisualizer;
  let fixture: ComponentFixture<PlantVisualizer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantVisualizer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantVisualizer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
