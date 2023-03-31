import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RapidAPIService {
  constructor(private http: HttpClient) {}

  searchMoviesAPI(query: string) {
    const pageNumber: number = 2;
    const mySite =
      'https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/';
    const myPageNumber = `/?page=${pageNumber}`;
    const myKey =
      '&rapidapi-key=1c98263760msh3afed6ceb16c7e8p1b1dedjsn9feb4f2c3e63';
    this.http
      .get(mySite + query + myPageNumber + myKey)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
