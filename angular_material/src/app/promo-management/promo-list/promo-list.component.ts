import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Promo } from 'src/app/models/promo.model';
import { SubSink } from 'subsink/dist/subsink';
import Swal from 'sweetalert2';
import { PromoManagementService } from '../promo-management.service';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css'],
})
export class PromoListComponent implements OnInit {
  private subs = new SubSink();
  promos: Promo[] = [];

  promoForm = new FormGroup({
    ref: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    sub_title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    image_url: new FormControl(null, Validators.required),
  });

  constructor(private promoManagementService: PromoManagementService) {}

  ngOnInit(): void {
    this.subs.sink = this.promoManagementService
      .getPromos()
      .subscribe((promo: any) => {
        this.promos = promo.data.GetAllPromos;
        console.log(promo.data.GetAllPromos);
      });
  }

  onSubmit() {
    if (this.promoForm.valid) {
      let valueForm = this.promoForm.value;
      this.subs.sink = this.promoManagementService
        .createPromo(valueForm)
        .subscribe();
      Swal.fire('mantap', 'joss', 'success');
      this.promoForm.reset();
    } else {
      Swal.fire('salah', 'makanbang', 'error');
    }
  }
}
