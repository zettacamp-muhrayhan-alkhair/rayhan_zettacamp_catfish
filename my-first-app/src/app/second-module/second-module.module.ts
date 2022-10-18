import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondHeaderComponent } from './second-header/second-header.component';
import { SecondMainComponent } from './second-main/second-main.component';
import { SecondFooterComponent } from './second-footer/second-footer.component';

@NgModule({
  declarations: [
    SecondHeaderComponent,
    SecondMainComponent,
    SecondFooterComponent,
  ],
  imports: [CommonModule],
  exports: [SecondHeaderComponent, SecondMainComponent, SecondFooterComponent],
})
export class SecondModuleModule {}
