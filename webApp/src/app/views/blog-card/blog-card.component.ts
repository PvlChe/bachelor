import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() size: string;
  
  constructor() { }

  ngOnInit() {
    if(!this.size) {
      this.size = 'big-card'
    }
  }

}
