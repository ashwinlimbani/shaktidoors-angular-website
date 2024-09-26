import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then((m) => m.QrModule),
  },
];
