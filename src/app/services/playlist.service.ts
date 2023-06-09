import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000/api/v1';



@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  constructor(private http: HttpClient) {}


  fetchAllUsersPlaylists(){
    return this.http.get(`${URL}/playlists`)
  }

  fetchSinglePlaylist(id:any){
    return this.http.get(`${URL}/playlists/${id}`)
  }

  fetchUsersPlaylist() {
    return this.http.get(`${URL}/playlists`);
  }

  fetchPlaylist(id: number) {
    return this.http.get(`${URL}/playlists/${id}`);

  }

}
