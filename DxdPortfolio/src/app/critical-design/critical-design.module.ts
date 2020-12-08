import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriticalDesignRoutingModule } from './critical-design-routing.module';
import { CriticalDesignComponent } from './critical-design.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [CriticalDesignComponent],
  imports: [
    CommonModule,
    CriticalDesignRoutingModule,
    MatExpansionModule
  ]
})
export class CriticalDesignModule { }
