import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModuleHeaderComponent } from './my-module-header/my-module-header.component';
import { MyModuleMainComponent } from './my-module-main/my-module-main.component';
import { MainMovieComponent } from './my-module-main/main-movie/main-movie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyModuleHeaderComponent,
    MyModuleMainComponent,
    MainMovieComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MyModuleHeaderComponent, MyModuleMainComponent],
})
export class MyModuleModule {}
