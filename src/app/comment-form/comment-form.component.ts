import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  comment: any = null;

  commentFormGroup = new FormGroup({
    content: new FormControl(''),
    movie_id: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  addComment(){

  }
  deleteComment(){
    
  }

}
