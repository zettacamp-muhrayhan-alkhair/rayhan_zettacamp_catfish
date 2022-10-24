import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() student: any;
  constructor() {}

  ngOnInit(): void {}
  onLike() {
    this.student.like = !this.student.like;
    console.log(this.student.like);
  }

  onDescription() {
    this.student.descBool = !this.student.descBool;
    console.log(this.student.descBool);
  }
}
