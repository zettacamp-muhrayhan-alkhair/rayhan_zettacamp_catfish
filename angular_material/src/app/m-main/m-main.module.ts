import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from './input-form/input-form.component';
import { InputDetailsComponent } from './input-details/input-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputFormComponent, InputDetailsComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputFormComponent, InputDetailsComponent],
})
export class MMainModule {}
