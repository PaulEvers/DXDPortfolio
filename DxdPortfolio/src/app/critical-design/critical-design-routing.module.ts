import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriticalDesignComponent } from './critical-design.component';

const routes: Routes = [{ path: '', component: CriticalDesignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriticalDesignRoutingModule { }
