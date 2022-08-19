import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@paltrack/client/shared/data-access/auth';

const routes: Routes = [
  {
    path: 'home',

    // FIXME: Buggy redirects?
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('@paltrack/client/home/feature/home').then((m) => m.HomeModule),
  },
  {
    path: 'flights',

    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('@paltrack/client/flights/feature/flights').then(
        (m) => m.FlightsModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@paltrack/client/auth/feature/shell').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
