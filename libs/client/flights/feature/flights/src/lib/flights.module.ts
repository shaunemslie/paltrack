import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { RouterModule, Routes } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';

export const flightsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FlightsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(flightsRoutes), DxDataGridModule],
  declarations: [FlightsComponent],
  exports: [FlightsComponent],
})
export class FlightsModule {}
