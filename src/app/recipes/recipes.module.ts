import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AddComponent } from './pages/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [DashboardComponent, DetailComponent, AddComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule],
})
export class RecipesModule {}
