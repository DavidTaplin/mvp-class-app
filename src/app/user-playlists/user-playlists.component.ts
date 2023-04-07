import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-user-playlists',
  templateUrl: './user-playlists.component.html',
  styleUrls: ['./user-playlists.component.css'],
})
export class UserPlaylistsComponent implements OnInit {
  userPlaylists: any = [];

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.playlistService.fetchUsersPlaylist().subscribe((res: any) => {
      if (res.success) {
        this.userPlaylists = res.payload.playlists;
      }
    });
  }
}
