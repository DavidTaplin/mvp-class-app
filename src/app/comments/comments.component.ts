import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any = [];

  constructor(private commentsService:CommentsService) { }

  ngOnInit(): void {
    this.commentsService.fetchComments().subscribe((res:any)=>{
      console.log(res);
      if(res.success){
        this.comments = res.payload.content;
      }
    })
  }

}
