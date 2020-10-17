import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VegaComponent } from './vega.component';

const routes: Routes = [{ path: '', component: VegaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VegaRoutingModule { }
