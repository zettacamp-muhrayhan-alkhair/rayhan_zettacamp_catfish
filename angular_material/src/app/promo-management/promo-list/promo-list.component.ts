import { Component, OnInit, OnDestroy } from '@angular/core';
import { Promo } from 'src/app/models/promo.model';
import { SubSink } from 'subsink/dist/subsink';
import { PromoManagementService } from '../promo-management.service';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css'],
})
export class PromoListComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  promos: Promo[] = [];

  constructor(private promoManagementService: PromoManagementService) {}

  ngOnInit(): void {
    this.subs.sink = this.promoManagementService
      .getPromos()
      .subscribe((promo: any) => {
        this.promos.push(promo.data.GetAllPromos[0]);
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
