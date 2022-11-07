import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() actor: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['actors', 'detail', this.actor.id]);
  }
}
