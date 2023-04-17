import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  detailRatingSubject: Subject<any> = new Subject();
  currentUserRatings = [];
  currentUserRatingsSubject: Subject<any> = new Subject();

  constructor(private http: HttpClient) {}

  setRatings(ratings) {
    this.currentUserRatings = ratings;
    this.currentUserRatingsSubject.next(ratings);
  }

  onAddRating(rating) {
    this.setRatings([...this.currentUserRatings, rating]);
  }

  fetchRatings() {
    return this.http.get('http://localhost:3000/api/v1/ratings');
  }

  onUpdateRatings(updatedRating: number, movieId = 4) {
    const token = JSON.parse(localStorage.getItem('token'));

    return this.http.put(
      `http://localhost:3000/api/v1/ratings/${movieId}`,
      {
        rating: updatedRating,
        rated_on_type: 'Movie',
        rated_on_id: movieId, // TSK: Not sure what this is exactly
      },
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
  }

  updateRating(editRating: any) {
    this.detailRatingSubject.next(editRating);
    const index = this.currentUserRatings.findIndex(
      (rating) => rating.id === editRating.id
    );
    this.currentUserRatings[index] = editRating;
    this.setRatings(this.currentUserRatings);
  }


  createRating(rating: number) {
    const token = JSON.parse(localStorage.getItem('token'));

    return this.http.post(
      'http://localhost:3000/api/v1/ratings',
      {
        rating,
        rated_on_type: 'Movie',
        rated_on_id: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
  }
}
