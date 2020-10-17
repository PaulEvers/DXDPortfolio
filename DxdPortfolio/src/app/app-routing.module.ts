import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'vega',
    loadChildren: () => import('./vega/vega.module').then((m) => m.VegaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
