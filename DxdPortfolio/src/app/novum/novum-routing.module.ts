import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sprint1Component } from './sprint1/sprint1.component';
import { Sprint2Component } from './sprint2/sprint2.component';
import { Sprint3Component } from './sprint3/sprint3.component';
import { Sprint4Component } from './sprint4/sprint4.component';

const routes: Routes = [
  { path: 'sprint1', component: Sprint1Component },
  { path: 'sprint2', component: Sprint2Component },
  { path: 'sprint3', component: Sprint3Component },
  { path: 'sprint4', component: Sprint4Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovumRoutingModule {}
