import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CityInfo} from '../city/cityInfo';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  city: any;
  cities: any = CityInfo;
  post: any;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap
      .subscribe(params => {
        const postId = parseInt(params.get('postId'), 10);
        this.city = CityInfo.find(city => {
          return city.id === parseInt(params.get('id'), 10);
        });
        this.post = this.city.posts[postId];
      });
  }

}
