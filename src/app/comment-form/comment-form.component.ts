import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommentService } from '../services/comment.service';
import { PlaylistService } from '../services/playlist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  comment: any = null;
  errors = [];
  playlistId: any = null;

  commentForm = new FormGroup({
    content: new FormControl(''),
    commentableType: new FormControl('playlist'),
    commentableId: new FormControl('null')
  });

  constructor(
    private commentService: CommentService, 
    private playlistService: PlaylistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.playlistService.fetchSinglePlaylist(1).subscribe({
    //   next: (res:any) => {
    //     console.log(res);
    //     this.playlistId = res.payload.playlist
    //   }
    // })
    this.route.params.subscribe((params) => {
      const playlistId = params['id'];
      this.playlistId = playlistId;
      this.commentForm.get('commentableId').setValue(playlistId);
    });
  }

  onSubmit(){
    const newComment = {
      content: this.commentForm.get('content').value,
      commentableType: this.commentForm.get('commentableType').value,
      commentableId: +this.playlistId
    }
    // console.log(newComment);

    this.commentService.createComment(newComment).subscribe({
      next: (res) => {
        console.log(res)
      }, error: (errRes) => {
        console.log(errRes)
      }
    });
  }

}
