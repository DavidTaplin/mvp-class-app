import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
movies: any = [];
  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
  }
getMovies() {
this.MovieService.getMovies().subscribe(response => {
  console.log(response);
  this.movies = response.Search;
})
}
}
