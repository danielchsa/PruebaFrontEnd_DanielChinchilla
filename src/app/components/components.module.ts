import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    BannerComponent,
    NavbarComponent,
    CardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, BannerComponent, NavbarComponent, CardComponent],
})
export class ComponentsModule {}
