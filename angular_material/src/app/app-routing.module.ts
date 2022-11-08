import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/promos', pathMatch: 'full' },
  {
    path: 'promos',
    title: 'Promos',
    loadChildren: () =>
      import('./promo-management/promo-management.module').then(
        (module) => module.PromoManagementModule
      ),
  },
  {
    path: 'schools',
    title: 'Schools',
    loadChildren: () =>
      import('./school-management/school-management.module').then(
        (module) => module.SchoolManagementModule
      ),
  },
  {
    path: 'users',
    title: 'Users',
    loadChildren: () =>
      import('./user-management/user-management.module').then((module) => module.UserManagementModule),
  },
  { path: '**', redirectTo: '/movie', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
