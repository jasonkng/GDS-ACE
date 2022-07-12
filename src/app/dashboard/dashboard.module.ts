import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { DashboardComponent } from './dashboard.component';
import { GroupCardModule } from '../groupcard/groupcard.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    GroupCardModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
