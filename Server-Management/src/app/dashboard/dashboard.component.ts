import { Component } from '@angular/core';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TrafficDataService } from './traffic-data.service';
import { TrafficMonitorizationComponent } from './traffic-monitorization/traffic-monitorization.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ServerStatusComponent,
    TrafficMonitorizationComponent,
    SupportTicketsComponent,
    DashboardItemComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
