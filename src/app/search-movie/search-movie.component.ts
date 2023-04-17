import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent implements OnInit {
  searchForm = new FormGroup({
    movieTitle: new FormControl(''),
  });

  resMovies: any = [];
  movieToQuery: string = null;

  imdbMovie: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.movieToQuery) {
      this.searchMoviesAPI(this.movieToQuery);
    }
  }

  searchMoviesAPI(query: string) {
    const pageNumber: number = 2;
    const myPageNumber = `/?page=${pageNumber}`;

    this.http
      .get(
        environment.RapidAPI.ApiUrl +
          query +
          myPageNumber +
          environment.RapidAPI.rapidAPI_Key
      )
      .subscribe((response: any) => {
        for (let key in response) {
          let movie = response[key];
          for (let key2 in movie) {
            this.imdbMovie.push(movie[key2]);
          }
        }
      });
  }

  onSubmit() {
    this.imdbMovie = [];
    this.movieToQuery = this.searchForm.value.movieTitle;
    this.searchMoviesAPI(this.movieToQuery);
    this.searchForm.reset();
  }
}
