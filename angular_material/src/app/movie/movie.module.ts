import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { MovieComponent } from './movie.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CardComponent } from './list/card/card.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  declarations: [MovieComponent, ListComponent, DetailComponent, CardComponent],
  imports: [CommonModule, AngularMaterialModule, MovieRoutingModule],
  exports: [MovieComponent, ListComponent, DetailComponent, CardComponent],
})
export class MovieModule {}
