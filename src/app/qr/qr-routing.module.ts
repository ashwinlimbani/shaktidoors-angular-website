import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrComponent } from './qr.component';

const routes: Routes = [
  {
    path: 'bestlam-doors/listing',
    loadComponent: () =>
      import('./bestlam-doors-listing/bestlam-doors-listing.component').then(
        (m) => m.BestlamDoorsListingComponent
      ),
  },
  {
    path: 'bestlam-doors',
    pathMatch: 'full',
    redirectTo: 'bestlam-doors/listing',
  },
  {
    path: 'shakti-doors/listing',
    loadComponent: () =>
      import('./shakti-doors-listing/shakti-doors-listing.component').then(
        (m) => m.ShaktiDoorsListingComponent
      ),
  },
  {
    path: 'shakti-doors',
    pathMatch: 'full',
    redirectTo: 'shakti-doors/listing',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bestlam-doors/listing',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrRoutingModule {}
