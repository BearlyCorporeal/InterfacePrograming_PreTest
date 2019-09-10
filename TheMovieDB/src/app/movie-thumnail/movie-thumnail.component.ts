import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-thumnail',
  templateUrl: './movie-thumnail.component.html',
  styleUrls: ['./movie-thumnail.component.css']
})
export class MovieThumnailComponent implements OnInit {
  @Input() item:Movie;

  constructor() { }

  ngOnInit() {
  }

}
