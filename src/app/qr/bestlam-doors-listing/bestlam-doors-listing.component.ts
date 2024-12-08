import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-bestlam-doors-listing',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './bestlam-doors-listing.component.html',
  styleUrl: './bestlam-doors-listing.component.scss',
})
export class BestlamDoorsListingComponent {
  doorDesigns = [
    {
      designNumber: 'BL101',
      name: 'Wood Grens',
      img: './assets/bestlam/BL101.JPG',
      webImg: './assets/bestlam/web/BL101.jpg',
    },
    {
      designNumber: 'BL102',
      name: 'Wood Grens',
      img: './assets/bestlam/BL102.JPG',
      webImg: './assets/bestlam/web/BL102.jpg',
    },
    {
      designNumber: 'BL103',
      name: 'Wood Grens',
      img: './assets/bestlam/BL103.JPG',
      webImg: './assets/bestlam/web/BL103.jpg',
    },
    {
      designNumber: 'BL104',
      name: 'Wood Grens',
      img: './assets/bestlam/BL104.JPG',
      webImg: './assets/bestlam/web/BL104.jpg',
    },
    {
      designNumber: 'BL105',
      name: 'Wood Grens',
      img: './assets/bestlam/BL105.JPG',
      webImg: './assets/bestlam/web/BL105.jpg',
    },
    {
      designNumber: 'BL106',
      name: 'Wood Grens',
      img: './assets/bestlam/BL106.JPG',
      webImg: './assets/bestlam/web/BL106.jpg',
    },
    {
      designNumber: 'BL107',
      name: 'Wood Grens',
      img: './assets/bestlam/BL107.JPG',
      webImg: './assets/bestlam/web/BL107.jpg',
    },
    {
      designNumber: 'BL108',
      name: 'Wood Grens',
      img: './assets/bestlam/BL108.JPG',
      webImg: './assets/bestlam/web/BL108.jpg',
    },
    {
      designNumber: 'BL109',
      name: 'Wood Grens',
      img: './assets/bestlam/BL109.JPG',
      webImg: './assets/bestlam/web/BL109.jpg',
    },
    {
      designNumber: 'BL110',
      name: 'Wood Grens',
      img: './assets/bestlam/BL110.JPG',
      webImg: './assets/bestlam/web/BL110.jpg',
    },
    {
      designNumber: 'BL111',
      name: 'Wood Grens',
      img: './assets/bestlam/BL111.JPG',
      webImg: './assets/bestlam/web/BL111.jpg',
    },
    {
      designNumber: 'BL112',
      name: 'Wood Grens',
      img: './assets/bestlam/BL112.JPG',
      webImg: './assets/bestlam/web/BL112.jpg',
    },
    {
      designNumber: 'BL113',
      name: 'Wood Grens',
      img: './assets/bestlam/BL113.JPG',
      webImg: './assets/bestlam/web/BL113.jpg',
    },
    {
      designNumber: 'BL114',
      name: 'Wood Grens',
      img: './assets/bestlam/BL114.JPG',
      webImg: './assets/bestlam/web/BL114.jpg',
    },
  ];

  whatsappOptions: AnimationOptions = {
    path: 'https://assets8.lottiefiles.com/packages/lf20_6yIUKcHwko.json',
    autoplay: true,
  };
}
