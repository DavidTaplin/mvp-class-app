import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RatingService } from '../services/rating.service';

@Component({
  selector: 'app-rating-edit',
  templateUrl: './rating-edit.component.html',
  styleUrls: ['./rating-edit.component.css']
})
export class RatingEditComponent implements OnInit {

  ratingForm: FormGroup;
  rating: any;

  constructor(private ratingService:RatingService) { }

  ngOnInit(): void {
    this.ratingForm = new FormGroup({
      rating: new FormControl('')
    });
  }


onSubmit() {
  const editRating = this.ratingForm.value;
  this.ratingService.onUpdateRatings(editRating, this.rating.id).subscribe({
    next: (res:any) => {
      this.ratingService.updateRating(res.payload.rating)
    }
  })
    console.log(this.ratingForm.value);

  }
}

