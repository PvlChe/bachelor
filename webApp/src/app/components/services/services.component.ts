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

  public filterData(toggledValues: [], searchValue: string) {
    this.services = this.data.services; 
    this.onFilterChange(toggledValues);
    this.onSearchClick(searchValue);
   }

  public onFilterChange(toggledValues: []){
    this.services = this.services.filter(service => {
      return toggledValues.every( state => {
        return service[state];
      })
    });
  }

  public onSearchClick(searchValue: string) {
    console.log(searchValue);
    this.services = this.services.filter(service => {
      let check = false;
      
      if( service.city.toLowerCase().includes(searchValue.toLowerCase()) ||
          service.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          service.description.toLowerCase().includes(searchValue.toLowerCase()) ||
          service.adress.toLowerCase().includes(searchValue.toLowerCase())
        ) check = true;

      return check;
    });
  }
  
  constructor() { 
  }

  ngOnInit() {
  }
}
