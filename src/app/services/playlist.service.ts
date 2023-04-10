import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000/api/v1/';
@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  fetchUsersPlaylist(){
    return this.http.get(`${URL}/playlists`)
  }

  fetchPlaylist(id:number){
    return this.http.get(`${URL}/playlists/${id}`)
  }
}
