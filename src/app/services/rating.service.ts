import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http:HttpClient) { }

fetchRatings(){
  return this.http.get("http://localhost:3000/api/v1/ratings")
}

updateRatings(updateRatings, id){
   const token = JSON.parse(localStorage.getItem('token'))

   return this.http.put(`http://localhost:3000/api/v1/ratings/${id}`,
   updateRatings, {
    headers: {
      Authorization: `Bearer ${token.value}`
    }
   }
   )
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
