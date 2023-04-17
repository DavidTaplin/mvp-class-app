import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RapidAPIService {
  imdbMovie: any = [];

  constructor(private http: HttpClient) {}

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
}
