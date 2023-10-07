import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AddComponent } from './pages/add/add.component';

@NgModule({
  declarations: [DashboardComponent, DetailComponent, AddComponent],
  imports: [CommonModule],
})
export class RecipesModule {}
