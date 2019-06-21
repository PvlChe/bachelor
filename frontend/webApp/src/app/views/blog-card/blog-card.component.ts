import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog.model.';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() index: number;
  @Input() blog: Blog;
  size: string;
  
  constructor() { }

  ngOnInit() {
    if(!this.size) {
      this.size = 'big-card'
    }
    if(this.index % 3 != 0){
      this.size = 'medium-card';
    } else {
      this.size = 'big-card';
    }
  }

}
