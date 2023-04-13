import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RatingService } from '../services/rating.service';

@Component({
  selector: 'app-rating-edit',
  templateUrl: './rating-edit.component.html',
  styleUrls: ['./rating-edit.component.css'],
})
export class RatingEditComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;

  @Input() rating = null;

  ratingForm: FormGroup;

  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {
    this.ratingForm = new FormGroup({
      rating: new FormControl(''),
    });
  }

  editRating() {
    const editedRating = this.ratingForm.value.rating as string;

    this.ratingService.onUpdateRatings(Number(editedRating)).subscribe({
      next: (res: any) => {
        //console.log(res);
        this.closeBtn.nativeElement.click();
        this.ratingService.updateRating(res.payload.rating);
      },
    });
  }
}
