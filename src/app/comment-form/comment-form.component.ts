import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommentService } from '../services/comment.service';
import { PlaylistService } from '../services/playlist.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../shared/models/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  errors = [];
  playlistId: any = null;

  commentForm = new FormGroup({
    content: new FormControl(''),
    commentable_type: new FormControl('playlist'),
    commentable_id: new FormControl(null)
  });

  constructor(
    private commentService: CommentService, 
    private playlistService: PlaylistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const playlistId = params['id'];
      this.playlistId = playlistId;
      this.commentForm.get('commentable_id').setValue(playlistId);
    });
  }

  onSubmit(){
    const newComment = this.commentForm.value;
    console.log(newComment);

    this.commentService.createComment(newComment).subscribe({
      next: (res:any) => {
        console.log(res)
      }, error: (errRes) => {
        console.log(errRes)
      }
    });
  }

}
