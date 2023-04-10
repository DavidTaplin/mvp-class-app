import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  comment: any = null;
  errors = [];

  commentForm = new FormGroup({
    content: new FormControl('')
  })

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }

  addComment(){}

  deleteComment(){}

  onSubmit(){
    const newComment = this.commentForm.value;
    console.log(newComment);

    this.commentService.createComment(newComment).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (errorRes) => {
        this.errors = errorRes.error.errors;
        console.log(errorRes);
      },
    });
  }


}
