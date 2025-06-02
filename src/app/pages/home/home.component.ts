import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { PerformanceService } from '../../services/performance.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private performanceService: PerformanceService
  ) {}

  ngOnInit() {
    this.setupSEO();
  }

  private setupSEO() {
    // Set meta tags for home page
    this.seoService.setMetaTags({
      title: 'Shakti Doors - Premium Door Manufacturers',
      description:
        'Transform your home with premium quality doors from Shakti Doors. We offer a wide range of wooden, steel, glass, and designer doors crafted with excellence.',
      image: 'assets/images/hero-bg.jpg',
      keywords:
        'premium doors, door manufacturer, wooden doors, steel doors, glass doors, designer doors, home improvement, interior doors, exterior doors',
      canonical: '/',
      type: 'website',
    });

    // Set organization schema
    this.seoService.setOrganizationSchema();

    // Set social media preview
    this.seoService.setSocialMediaPreview({
      title: 'Shakti Doors - Premium Door Manufacturers',
      description:
        'Transform your home with premium quality doors. Expert craftsmanship meets innovative design.',
      image: `${window.location.origin}/assets/images/hero-bg.jpg`,
      twitterCard: 'summary_large_image',
    });

    // Set FAQ schema for home page
    this.seoService.setFAQSchema([
      {
        question: 'What makes Shakti Doors unique?',
        answer:
          'Shakti Doors combines premium materials, expert craftsmanship, and innovative designs to create doors that enhance both the security and aesthetics of your space.',
      },
      {
        question: 'Where are Shakti Doors manufactured?',
        answer:
          'Our doors are manufactured in our state-of-the-art facilities in Lingnoor-Kapshi and Sangli Fata, ensuring the highest quality standards.',
      },
      {
        question: 'Do you offer installation services?',
        answer:
          'Yes, we provide professional door installation services with our team of experienced technicians.',
      },
    ]);

    // Set breadcrumb for home page
    this.seoService.setBreadcrumbSchema([{ name: 'Home', url: '/' }]);
  }
}
