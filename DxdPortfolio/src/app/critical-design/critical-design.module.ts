import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriticalDesignRoutingModule } from './critical-design-routing.module';
import { CriticalDesignComponent } from './critical-design.component';


@NgModule({
  declarations: [CriticalDesignComponent],
  imports: [
    CommonModule,
    CriticalDesignRoutingModule
  ]
})
export class CriticalDesignModule { }
