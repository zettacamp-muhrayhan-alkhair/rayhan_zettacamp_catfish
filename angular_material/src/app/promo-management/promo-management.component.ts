import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { Promo } from '../models/promo.model';
import { PromoManagementService } from './promo-management.service';

@Component({
  selector: 'app-promo-management',
  templateUrl: './promo-management.component.html',
  styleUrls: ['./promo-management.component.css'],
})
export class PromoManagementComponent implements OnInit {
  constructor(private promoManagementService: PromoManagementService) {}

  ngOnInit(): void {

  }
}
