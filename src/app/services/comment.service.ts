import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subject } from 'rxjs';

const URL = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  allComments = [];
  commentsSubject: Subject<any> = new Subject;
  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllComments(){
    return this.http.get(`${URL}/comments`);
  }

  getSingleComment(id: number){
    return this.http.get(`${URL}/comments/${id}`);
  }

  createComment(comment: any){
    const token = this.authService.getToken();
    console.log(token)
    return this.http.post(`${URL}/comments`, comment, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      } 
    });
  }

}
