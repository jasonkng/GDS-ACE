import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupCardComponent } from './groupcard.component';



@NgModule({
  declarations: [GroupCardComponent],
  imports: [
    CommonModule
  ],
  exports: [GroupCardComponent]
})
export class GroupCardModule { }
