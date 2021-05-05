import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities = [
    {
      name: 'San Francisco', // United States of America
      imgUrl: 'assets/images/wayfarer.jpg'
    }, {
      name: 'London', // United Kingdom
      imgUrl: 'assets/images/wayfarer.jpg'
    }, {
      name: 'Sydney', // Australia
      imgUrl: 'assets/images/wayfarer.jpg'
    },
    {
      name: 'Tokyo',  // Japan
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4EIjk183KfiiW2gNm9OL__MBKovghDwN_g&usqp=CAU'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
