import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RatingService } from '../services/rating.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
})
export class RatingsComponent implements OnInit {
  ratings: any = [];
  route: any;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  ratingFormGroup = new FormGroup({
    rating: new FormControl(''),
  });

  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {
    this.ratingService.fetchRatings().subscribe((res: any) => {
      if (res.success) {
        this.ratings = res.payload.rating;
      }
    });
  }

  createRating() {
    const newRating = this.ratingFormGroup.value.rating;

    this.ratingService.createRating(Number(newRating)).subscribe({
      next: (res: any) => {
        this.closeBtn.nativeElement.click();
        this.ratingService.onAddRating(res.payload.rating);
      },
    });
  }
}
