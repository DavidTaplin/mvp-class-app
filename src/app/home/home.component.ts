import { Component, OnInit } from '@angular/core';
import { RapidAPIService } from '../shared/api/rapidAPI.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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

        console.log('IMDB_MOVIE: ', this.imdbMovie);
      });
  }

  onSubmit() {
    this.imdbMovie = [];
    this.movieToQuery = this.searchForm.value.movieTitle;
    this.searchMoviesAPI(this.movieToQuery);
    console.log('FORM:', this.searchForm.value);
    this.searchForm.reset();
  }
}
