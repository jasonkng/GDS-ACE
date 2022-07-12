import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { GroupCardModule } from '../shared/components/groupcard/groupcard.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    GroupCardModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
