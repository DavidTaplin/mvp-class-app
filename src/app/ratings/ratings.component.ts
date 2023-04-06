import { Component, OnInit } from '@angular/core';
import { RatingService } from '../services/rating.service';


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  ratings: any = [];


  constructor(private ratingService:RatingService) { }

  ngOnInit(): void {
    this.ratingService.fetchRatings().subscribe((res:any)=>{
      console.log(res);
      if(res.success){
        this.ratings = res.payload.rating;
      }
    })
    }




}
