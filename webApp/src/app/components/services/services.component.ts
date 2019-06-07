import { Component, OnInit, Directive } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { DummyData } from './../../dummyData/dummy.data';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  
})
export class ServicesComponent implements OnInit {

  data: DummyData = new DummyData();
  services: Service[] = this.data.services;

  public onFilterChange(value: []){
    this.services = this.data.services.filter(service => {
      return value.every( state => {
        return service[state];
      })
    });
  }
  
  constructor() { 
  }

  ngOnInit() {
  }
}
