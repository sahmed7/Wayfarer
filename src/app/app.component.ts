import { Component } from '@angular/core';
import {POSTS} from './city/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wayfarer';
  posts = POSTS;
}
