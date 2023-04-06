import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }



fetchComments(){
  return this.http.get("http://localhost:3000/api/v1/comments")
}

}
