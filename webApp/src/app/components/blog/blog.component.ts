import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model.';
import { DummyData } from 'src/app/dummyData/dummy.data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  data: DummyData = new DummyData();
  blogs: Blog[] = this.data.blogs;

  constructor() { }

  ngOnInit() {
  }

}
