import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PostManagementModule } from './post-management/post-management.module';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    PostManagementModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
