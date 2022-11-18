import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageModule } from './homepage/homepage.module';
import { LoginModule } from './login/login.module';
import { MenuModule } from './menu/menu.module';
import { AboutModule } from './about/about.module';
import { CartModule } from './cart/cart.module';
import { StockManagementModule } from './stock-management/stock-management.module';

import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuManagementModule } from './menu-management/menu-management.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HomepageModule,
    LoginModule,
    MenuModule,
    AboutModule,
    CartModule,
    StockManagementModule,
    MenuManagementModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
