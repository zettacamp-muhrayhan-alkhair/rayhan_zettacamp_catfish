import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.css'],
})
export class PromoCardComponent implements OnInit {
  @Input() promo: any;
  constructor() {}

  ngOnInit(): void {}
}
