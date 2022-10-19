import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-movie',
  templateUrl: './main-movie.component.html',
  styleUrls: ['./main-movie.component.css'],
})
export class MainMovieComponent implements OnInit {
  @Input() movies: any;
  activeButton: boolean = false;
  constructor() {
    setTimeout(() => {
      this.activeButton = true;
    }, 5000);
  }
  clicked: boolean = false;

  ngOnInit(): void {}

  btnClicked(): any {
    this.clicked = !this.clicked;
  }
}
