import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: UserManagementComponent,
  },
  {
    title: 'Users',
    path: 'users',
    component: UserListComponent,
  },
  {
    title: 'User Form',
    path: 'user-form',
    component: UserCreationComponent,
  },
];

@NgModule({
  declarations: [
    UserManagementComponent,
    UserListComponent,
    UserCardComponent,
    UserCreationComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    UserManagementComponent,
    UserListComponent,
    UserCardComponent,
    UserCreationComponent,
  ],
})
export class UserManagementModule {}
