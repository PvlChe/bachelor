import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CardComponent } from './card/card.component';
import { BlogCardComponent } from './blog-card/blog-card.component';

//Material imports
import { 
  MatCardModule, 
  MatButtonModule

} from '@Angular/material';


@NgModule({
  declarations: [
    CardComponent, 
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    //Material
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    CardComponent,
    BlogCardComponent
  ]
})
export class ViewsModule { }
