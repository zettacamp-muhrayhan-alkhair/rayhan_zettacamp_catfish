import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/movies/list', pathMatch: 'full' },
  {
    path: 'movies',
    loadChildren: () =>
      import('./movie/movie.module').then((m) => m.MovieModule),
  },
  {
    path: 'actors',
    loadChildren: () =>
      import('./actor/actor.module').then((m) => m.ActorModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
