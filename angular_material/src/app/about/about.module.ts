import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [AboutComponent],
})
export class AboutModule {}
