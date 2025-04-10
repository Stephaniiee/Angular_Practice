import { Component, inject } from '@angular/core';
import { TrafficDataService } from '../traffic-data.service';

@Component({
  selector: 'app-traffic-monitorization',
  standalone: true,
  imports: [],
  templateUrl: './traffic-monitorization.component.html',
  styleUrl: './traffic-monitorization.component.css',
})
export class TrafficMonitorizationComponent {
  public TrafficData = inject(TrafficDataService);

  maxTraffic = Math.max(
    ...this.TrafficData.dummyTrafficData.map((data) => data.value)
  );
}
