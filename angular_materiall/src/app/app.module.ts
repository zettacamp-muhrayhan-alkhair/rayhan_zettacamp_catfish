import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Module
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BookManagementModule } from './book-management/book-management.module';

// HTTPCLIENTMODULE
import { HttpClientModule } from '@angular/common/http';

// Router Module
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Module
    AngularMaterialModule,
    BookManagementModule,

    // HTTPCLIENT MODULE
    HttpClientModule,

    // Router Module
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
