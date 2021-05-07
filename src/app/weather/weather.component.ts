import {Component, Input, OnInit} from '@angular/core';
import { CityComponent} from '../city/city.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() city: any;
  weather: any;

  constructor(private http: HttpClient) { }

  ngOnChanges(): void {
    this.findWeather(this.city);
  }

  ngOnInit(): void {
    // console.log('this is city', this.city);
    this.findWeather(this.city);
  }

  findWeather(city): any{
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=ffe203e68f45bbb488ed05b65cb0d682&units=imperial`)
        .subscribe(response => this.weather = response);
}






}
