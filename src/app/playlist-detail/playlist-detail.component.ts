import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../services/playlist.service';
import { RatingService } from '../services/rating.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css'],
})
export class PlaylistDetailComponent implements OnInit {
  playlist: any = null;
  ratings: any = [];


  constructor(
    private activatedRoute: ActivatedRoute,
    private playlistService: PlaylistService,
    private ratingService: RatingService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const playlistId = params['id'];

      this.playlistService.fetchPlaylist(playlistId).subscribe({
        next: (res: any) => {
          this.playlist = res.payload.playlist;
        },
      });
    });

    this.ratingService.fetchRatings().subscribe((res:any)=>{
      console.log(res);
      if(res.success){
        this.ratings = res.payload.rating;
      }
    });

  }

  ondeleteRating(){
    this.ratingService.deleteRatings(this.ratings.id).subscribe((res:any)=>{
      next: res 
    })
  }
}
