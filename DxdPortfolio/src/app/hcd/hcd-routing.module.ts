import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcdComponent } from './hcd.component';

const routes: Routes = [{ path: '', component: HcdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HcdRoutingModule { }
