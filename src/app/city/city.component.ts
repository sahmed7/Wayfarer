import { Component, OnInit } from '@angular/core';
import {POSTS} from './posts';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  posts: any;
  cityPosts: any;
  constructor() { }

  ngOnInit(): void {
    this.posts = POSTS;

  }

}
