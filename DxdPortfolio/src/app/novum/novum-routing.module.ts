import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovumComponent } from './novum.component';

const routes: Routes = [{ path: '', component: NovumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovumRoutingModule { }
