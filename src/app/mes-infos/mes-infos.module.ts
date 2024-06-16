import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesInfosRoutingModule } from './mes-infos-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PassionComponent } from './components/passion/passion.component';


@NgModule({
  declarations: [
    HomeComponent,
    PassionComponent
  ],
  imports: [
    CommonModule,
    MesInfosRoutingModule
  ]
})
export class MesInfosModule { }
