import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MagnificPopupDirective } from '../../directives/magnific-popup.directive';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MagnificPopupDirective],
})
export class GalleryComponent {
  // Array of image paths
  images = Array.from({ length: 52 }, (_, i) => ({
    path: `assets/images/${String(i + 1).padStart(2, '0')}.jpg`,
    title: `Image ${i + 1}`,
  }));
}
