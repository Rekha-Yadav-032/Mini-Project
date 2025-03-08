import { Component } from '@angular/core';
import { EventComponent } from './event/event.component'; // Import the standalone component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventComponent], // Add the EventComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event Countdown';
}
