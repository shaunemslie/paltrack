import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('@paltrack/client/auth/feature/login').then((m) => m.LoginModule),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRouting {}
