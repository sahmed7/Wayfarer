import { Component, OnInit } from '@angular/core';
import {CityInfo} from './cityInfo';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cities: any = CityInfo;
  city: any;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.city = CityInfo.find(city => {
        return city.id === parseInt(params.get('id'), 10);
      });
    });
  }

}
