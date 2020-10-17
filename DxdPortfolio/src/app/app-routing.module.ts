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
  {
    path: 'hcd',
    loadChildren: () => import('./hcd/hcd.module').then((m) => m.HcdModule),
  },
  {
    path: 'criticalDesign',
    loadChildren: () =>
      import('./critical-design/critical-design.module').then(
        (m) => m.CriticalDesignModule
      ),
  },
  {
    path: 'story',
    loadChildren: () =>
      import('./story/story.module').then((m) => m.StoryModule),
  },
  {
    path: 'novum',
    loadChildren: () =>
      import('./novum/novum.module').then((m) => m.NovumModule),
  },
  {
    path: 'media',
    loadChildren: () =>
      import('./media/media.module').then((m) => m.MediaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
