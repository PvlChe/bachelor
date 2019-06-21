import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() service: Service;
  hideInfo = true;
 

  constructor() { 

  }

  ngOnInit() {


  }

}
