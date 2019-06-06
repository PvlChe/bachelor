import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() service: Service;
  title: string;
  city: string;
  description: string;
  logoUrl: string;

  constructor() { 

  }

  ngOnInit() {

    if(this.service) {
      this.title = this.service.title;
      this.city = this.service.city;
      this.description = this.service.description;
      this.logoUrl = this.service.logoUrl;
    }

  }

}
