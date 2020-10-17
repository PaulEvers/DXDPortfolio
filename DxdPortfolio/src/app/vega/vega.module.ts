import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegaRoutingModule } from './vega-routing.module';
import { VegaComponent } from './vega.component';

import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [VegaComponent],
  imports: [
    CommonModule,
    VegaRoutingModule,
    MatExpansionModule
  ]
})
export class VegaModule { }
