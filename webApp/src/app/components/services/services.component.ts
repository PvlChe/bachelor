import { Component, OnInit, Directive } from '@angular/core';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  
})
export class ServicesComponent implements OnInit {

  getServices() {
    let services = [];
    for (let i = 0; i < 10; i++) {
      let service: Service = new Service(
        'Service Title',
        'Minsk',
        `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        'logoUrl'
      );
      services.push(service);
    }
    return services;
  }

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
