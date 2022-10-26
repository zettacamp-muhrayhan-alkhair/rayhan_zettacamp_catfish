import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import Angular Material Module
import { AngularMaterialModule } from './angular-material/angular-material.module';

// Import HTTP CLIENT MODULE
import { HttpClientModule } from '@angular/common/http';

// Import Working Module
import { BookManagementModule } from './book-management/book-management.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    BookManagementModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
