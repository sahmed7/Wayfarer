import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarouselComponent} from './carousel/carousel.component';
import {CitiesComponent} from './cities/cities.component';
import {CityComponent} from './city/city.component';

const routes: Routes = [{
  path: '',
  component: CarouselComponent
  },
  {
    path: 'cities',
    component: CitiesComponent,
    children: [
      {
        path: ':id',
        component: CityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
