import { Component } from '@angular/core';
import {CityInfo} from './city/cityInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wayfarer';
  cityInfo = CityInfo;
}
