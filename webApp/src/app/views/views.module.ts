import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CardComponent } from './card/card.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { EventCardComponent } from './event-card/event-card.component';

//Material imports
import { 
  MatCardModule, 
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatIconModule

} from '@Angular/material';



@NgModule({
  declarations: [
    CardComponent, 
    BlogCardComponent, 
    EventCardComponent
  ],
  imports: [
    CommonModule,
    //Material
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    CardComponent,
    BlogCardComponent,
    EventCardComponent
  ]
})
export class ViewsModule { }
