import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegaRoutingModule } from './vega-routing.module';
import { VegaComponent } from './vega.component';


@NgModule({
  declarations: [VegaComponent],
  imports: [
    CommonModule,
    VegaRoutingModule
  ]
})
export class VegaModule { }
