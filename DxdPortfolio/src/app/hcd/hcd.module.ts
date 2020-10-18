import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HcdRoutingModule } from './hcd-routing.module';
import { HcdComponent } from './hcd.component';
import { MatExpansionModule } from '@angular/material';


@NgModule({
  declarations: [HcdComponent],
  imports: [
    CommonModule,
    HcdRoutingModule,
    MatExpansionModule
  ]
})
export class HcdModule { }
