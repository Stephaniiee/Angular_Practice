import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficMonitorizationComponent } from './traffic-monitorization.component';

describe('TrafficMonitorizationComponent', () => {
  let component: TrafficMonitorizationComponent;
  let fixture: ComponentFixture<TrafficMonitorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficMonitorizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficMonitorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
