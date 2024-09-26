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
    // component: QrComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bestlam-doors/listing',
    // component: QrComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrRoutingModule {}
