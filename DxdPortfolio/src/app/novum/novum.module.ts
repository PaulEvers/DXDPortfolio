import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovumRoutingModule } from './novum-routing.module';
import { NovumComponent } from './novum.component';
import { Sprint1Component } from './sprint1/sprint1.component';
import { Sprint2Component } from './sprint2/sprint2.component';
import { Sprint3Component } from './sprint3/sprint3.component';
import { Sprint4Component } from './sprint4/sprint4.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    NovumComponent,
    Sprint1Component,
    Sprint2Component,
    Sprint3Component,
    Sprint4Component,
  ],
  imports: [CommonModule, NovumRoutingModule, MatCardModule],
})
export class NovumModule {}
