import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css'],
})
export class PlaylistDetailComponent implements OnInit {
  playlist: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private playlistService: PlaylistService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const playlistId = params['id'];
      this.playlistService.fetchSinglePlaylist(playlistId).subscribe({
        next: (res: any) => {
          this.playlist = res.payload.playlist;
        },
      });
    });
  }
}
