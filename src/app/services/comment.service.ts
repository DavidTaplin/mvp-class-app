import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

const URL = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  fetchComments(){
  }

  createComment(comment){
    const token = this.authService.getToken();
    return this.http.post(`${URL}/comments`, comment, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      }
    });
  }
}
