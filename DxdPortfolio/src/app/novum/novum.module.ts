import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovumRoutingModule } from './novum-routing.module';
import { NovumComponent } from './novum.component';


@NgModule({
  declarations: [NovumComponent],
  imports: [
    CommonModule,
    NovumRoutingModule
  ]
})
export class NovumModule { }
