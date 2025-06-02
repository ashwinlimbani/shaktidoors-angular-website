import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MagnificPopupDirective } from '../../directives/magnific-popup.directive';
import { SeoService } from '../../services/seo.service';

interface GalleryImage {
  path: string;
  title: string;
  alt: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MagnificPopupDirective],
})
export class GalleryComponent implements OnInit {
  // Array of image paths with SEO-friendly attributes
  images: GalleryImage[] = Array.from({ length: 52 }, (_, i) => ({
    path: `assets/images/${String(i + 1).padStart(2, '0')}.jpg`,
    title: `Premium Door Design ${i + 1}`,
    alt: `High-quality door design showcasing premium craftsmanship - Design ${
      i + 1
    }`,
    description: `Elegant door design featuring superior materials and expert craftsmanship. Perfect for modern homes and commercial spaces.`,
  }));

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.setupSEO();
  }

  private setupSEO() {
    // Set meta tags
    this.seoService.setMetaTags({
      title: 'Premium Door Designs Gallery | Shakti Doors',
      description:
        'Explore our extensive collection of premium door designs. From classic wooden doors to modern steel designs, find the perfect door for your space.',
      image: this.images[0].path,
    });

    // Set structured data for image gallery
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Shakti Doors Product Gallery',
      description:
        'Premium collection of door designs featuring high-quality materials and expert craftsmanship',
      image: this.images.map((img) => ({
        '@type': 'ImageObject',
        contentUrl: `${window.location.origin}/${img.path}`,
        name: img.title,
        description: img.description,
      })),
    };

    this.seoService.setStructuredData(structuredData);
  }
}
