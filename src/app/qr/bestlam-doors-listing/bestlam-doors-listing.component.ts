import { Component } from '@angular/core';

@Component({
  selector: 'app-bestlam-doors-listing',
  standalone: true,
  imports: [],
  templateUrl: './bestlam-doors-listing.component.html',
  styleUrl: './bestlam-doors-listing.component.scss',
})
export class BestlamDoorsListingComponent {
  doorDesigns = [
    {
      designNumber: 100,
      name: 'Classic Oak',
      img: './assets/bestlam/100.png',
    },
    {
      designNumber: 101,
      name: 'Classic Oak',
      img: './assets/bestlam/101.png',
    },
    {
      designNumber: 102,
      name: 'Classic Oak',
      img: './assets/bestlam/102.png',
    },
    {
      designNumber: 103,
      name: 'Classic Oak',
      img: './assets/bestlam/103.png',
    },
    {
      designNumber: 104,
      name: 'Classic Oak',
      img: './assets/bestlam/104.png',
    },
    {
      designNumber: 105,
      name: 'Classic Oak',
      img: './assets/bestlam/105.png',
    },
  ];
}
