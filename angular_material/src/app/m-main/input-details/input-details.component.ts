import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class InputDetailsComponent implements OnInit {
  // @Input('newUser') user: {
  //   fullName: string;
  //   nickname: string;
  //   email: string;
  //   username: string;
  // };

  // @Input('newUser') user: any;

  // @Input() user: { fullname: string; nickname: string; email: string; username: string };
  @Input('userInputted') user: any;
  constructor() {}

  ngOnInit(): void {}
}
