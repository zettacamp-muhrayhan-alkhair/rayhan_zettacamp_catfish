import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorComponent } from './actor.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './list/card/card.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ActorsRoutingModule } from './actor-routing.module';

@NgModule({
  declarations: [ActorComponent, DetailComponent, ListComponent, CardComponent],
  imports: [CommonModule, AngularMaterialModule, ActorsRoutingModule],
  exports: [ActorComponent, DetailComponent, ListComponent, CardComponent],
})
export class ActorModule {}
