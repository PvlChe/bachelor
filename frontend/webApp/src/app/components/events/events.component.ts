import { Component, OnInit } from '@angular/core';
import { DummyData } from 'src/app/dummyData/dummy.data';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  
  data: DummyData = new DummyData();
  events: Event[] = this.data.events;
   
  public onSearchClick(searchValue: string) {
    this.events = this.data.events.filter(event => {
      let check = false;
      
      if( searchValue.toLowerCase().includes(event.title.toLowerCase()) ||
          event.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          searchValue.toLowerCase().includes(event.city.toLowerCase()) ||
          event.city.toLowerCase().includes(searchValue.toLowerCase()) ||
          event.description.toLowerCase().includes(searchValue.toLowerCase()) 
        ) check = true;

      return check;
    })
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
