import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_URL: string = '';
  private API_KEY: string = ''
      constructor(private http: HttpClient) { }

      getMovies(): Observable<any> {
      return this.http.get(`${this.API_URL}&s=terminator${this.API_KEY}`) 
     }
    }
