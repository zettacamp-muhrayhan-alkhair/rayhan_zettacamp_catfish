import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoManagementComponent } from './promo-management.component';
import { PromoListComponent } from './promo-list/promo-list.component';
import { PromoCardComponent } from './promo-list/promo-card/promo-card.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PromoManagementComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    PromoManagementComponent,
    PromoListComponent,
    PromoCardComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [PromoManagementComponent, PromoListComponent, PromoCardComponent],
})
export class PromoManagementModule {}
