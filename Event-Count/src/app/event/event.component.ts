
import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../event.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  imports: [FormsModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Event[] = [];
  eventName: string = '';
  eventDate: string = '';
  countdown: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  // Add a new event
  addEvent() {
    if (this.eventName && this.eventDate) {
      const newEvent: Event = {
        name: this.eventName,
        date: new Date(this.eventDate),
      };
      this.eventService.addEvent(newEvent);
      this.events = this.eventService.getEvents();
      this.eventName = '';
      this.eventDate = '';
    }
  }

  // Calculate the time left for each event
  getTimeLeft(eventDate: Date): string {
    return this.eventService.getTimeLeft(eventDate);
  }
}
