import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    BannerRoutingModule,
    SharedModule,
    AuthModule
  ]
})
export class BannerModule { }
