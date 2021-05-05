import { Component, OnInit } from '@angular/core';
import {CityInfo} from '../city/cityInfo';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: any = CityInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
