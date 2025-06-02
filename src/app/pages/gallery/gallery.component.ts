import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MagnificPopupDirective } from '../../directives/magnific-popup.directive';
import { SeoService } from '../../services/seo.service';
import { PerformanceService } from '../../services/performance.service';

interface GalleryImage {
  path: string;
  title: string;
  alt: string;
  description: string;
  category: string;
  material: string;
  dimensions: string;
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
    category: this.getDoorCategory(i),
    material: this.getDoorMaterial(i),
    dimensions: this.getDoorDimensions(i),
  }));

  constructor(
    private seoService: SeoService,
    private performanceService: PerformanceService
  ) {}

  ngOnInit() {
    this.setupSEO();
    this.setupBreadcrumbs();
    this.setupProductSchemas();
    this.setupFAQSchema();
  }

  private getDoorCategory(index: number): string {
    const categories = [
      'Wooden Doors',
      'Steel Doors',
      'Glass Doors',
      'Security Doors',
      'Designer Doors',
    ];
    return categories[index % categories.length];
  }

  private getDoorMaterial(index: number): string {
    const materials = [
      'Solid Wood',
      'Reinforced Steel',
      'Tempered Glass',
      'Composite Material',
      'Engineered Wood',
    ];
    return materials[index % materials.length];
  }

  private getDoorDimensions(index: number): string {
    const dimensions = [
      '80" x 32"',
      '84" x 36"',
      '96" x 40"',
      '72" x 30"',
      '78" x 34"',
    ];
    return dimensions[index % dimensions.length];
  }

  private setupSEO() {
    // Set meta tags
    this.seoService.setMetaTags({
      title: 'Premium Door Designs Gallery',
      description:
        'Explore our extensive collection of premium door designs. From classic wooden doors to modern steel designs, discover the perfect door for your space. View our high-quality craftsmanship and innovative designs.',
      image: this.images[0].path,
      keywords:
        'door designs, premium doors, wooden doors, steel doors, glass doors, security doors, designer doors, door gallery, door catalog, Shakti Doors',
      canonical: '/gallery',
      type: 'website',
    });

    // Set structured data for image gallery
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Shakti Doors Product Gallery',
      description:
        'Premium collection of door designs featuring high-quality materials and expert craftsmanship',
      about: {
        '@type': 'Thing',
        name: 'Door Designs',
        description:
          'Collection of premium door designs for residential and commercial use',
      },
      image: this.images.map((img) => ({
        '@type': 'ImageObject',
        contentUrl: `${window.location.origin}/${img.path}`,
        name: img.title,
        description: img.description,
        caption: `${img.category} - ${img.material}`,
        representativeOfPage: img.path === this.images[0].path,
      })),
      provider: {
        '@type': 'Organization',
        name: 'Shakti Doors',
        url: window.location.origin,
      },
    };

    this.seoService.setStructuredData(structuredData);
    this.seoService.setOrganizationSchema();

    // Add enhanced social media preview
    this.seoService.setSocialMediaPreview({
      title: 'Premium Door Designs Gallery | Shakti Doors',
      description:
        'Explore our extensive collection of premium door designs. From classic wooden doors to modern steel designs, discover the perfect door for your space.',
      image: `${window.location.origin}/${this.images[0].path}`,
      twitterCard: 'summary_large_image',
    });
  }

  private setupBreadcrumbs() {
    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: 'Gallery', url: '/gallery' },
    ]);
  }

  private setupProductSchemas() {
    // Set product schema for featured products
    this.images.slice(0, 5).forEach((image) => {
      this.seoService.setProductSchema({
        name: image.title,
        description: image.description,
        image: `${window.location.origin}/${image.path}`,
        category: image.category,
        material: image.material,
        dimensions: image.dimensions,
        availability: 'https://schema.org/InStock',
      });
    });
  }

  private setupFAQSchema() {
    this.seoService.setFAQSchema([
      {
        question: 'What types of doors do you offer?',
        answer:
          'We offer a wide range of doors including wooden doors, steel doors, glass doors, security doors, and designer doors. Each category features premium materials and expert craftsmanship.',
      },
      {
        question: 'What are the standard door dimensions?',
        answer:
          'Our doors come in various standard sizes including 80" x 32", 84" x 36", 96" x 40", 72" x 30", and 78" x 34". Custom dimensions are also available upon request.',
      },
      {
        question: 'What materials are used in your doors?',
        answer:
          'We use high-quality materials including solid wood, reinforced steel, tempered glass, composite materials, and engineered wood. All materials are carefully selected for durability and aesthetic appeal.',
      },
      {
        question: 'Do you offer customization options?',
        answer:
          'Yes, we offer extensive customization options for all our door designs. This includes custom dimensions, materials, finishes, and hardware options to match your specific requirements.',
      },
    ]);
  }
}
