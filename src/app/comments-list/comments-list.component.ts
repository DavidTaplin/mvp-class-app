import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Comment } from '../shared/models/comment.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  commentsList: any = [];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getAllComments().subscribe((res: any) => {
      if (res.success) {
        this.commentsList = res.payload.comments;
        console.log(this.commentsList);
      }
    });
  }

}
