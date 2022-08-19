import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';

export const homeRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes), DxDataGridModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
