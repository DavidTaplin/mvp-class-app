import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RatingService {

  detailRatingSubject: Subject<any> = new Subject
  currentUserRatings = [];
  currentUserRatingsSubject: Subject<any> = new Subject

  constructor(private http:HttpClient) { }


setRatings(ratings){
  this.currentUserRatings = ratings;
  this.currentUserRatingsSubject.next(ratings);
}

fetchRatings(){
  return this.http.get("http://localhost:3000/api/v1/ratings")
}

onUpdateRatings(updateRatings, id){
   const token = JSON.parse(localStorage.getItem('token'))

   return this.http.put(`http://localhost:3000/api/v1/ratings/${id}`,
   updateRatings, {
    headers: {
      Authorization: `Bearer ${token.value}`
    }
   }
   )
}


updateRating(editRating:any){
  this.detailRatingSubject.next(editRating)
  const index = this.currentUserRatings.findIndex(rating => rating.id === editRating.id)
  this.currentUserRatings[index] = editRating
  this.setRatings(this.currentUserRatings)
}

deleteRatings(id){
  const token = JSON.parse(localStorage.getItem('token'))

  return this.http.delete(`http://localhost:3000/api/v1/ratings/${id}`,{
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })
}


}
