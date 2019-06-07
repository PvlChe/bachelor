import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  hideInfo = true;
  @Input()
  event: Event;

  constructor() { }

  ngOnInit() {
  }

}
