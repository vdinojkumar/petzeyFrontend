import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  Total:number=20;
  Confirmed:number=12;
  Closed:number=1;
  cancled:number=1;
  
}
