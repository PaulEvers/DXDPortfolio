import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HcdRoutingModule } from './hcd-routing.module';
import { HcdComponent } from './hcd.component';


@NgModule({
  declarations: [HcdComponent],
  imports: [
    CommonModule,
    HcdRoutingModule
  ]
})
export class HcdModule { }
