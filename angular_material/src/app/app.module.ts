import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { PromoManagementModule } from './promo-management/promo-management.module';
import { SchoolManagementModule } from './school-management/school-management.module';
import { UserManagementModule } from './user-management/user-management.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    PromoManagementModule,
    SchoolManagementModule,UserManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
