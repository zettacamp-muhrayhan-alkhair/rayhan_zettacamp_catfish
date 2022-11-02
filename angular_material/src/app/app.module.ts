import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PostManagementModule } from './post-management/post-management.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    PostManagementModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
