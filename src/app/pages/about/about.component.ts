import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { PerformanceService } from '../../services/performance.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private performanceService: PerformanceService
  ) {}

  ngOnInit() {
    this.setupSEO();
  }

  private setupSEO() {
    // Set meta tags for about page
    this.seoService.setMetaTags({
      title: 'About Shakti Doors - Our Story & Commitment to Quality',
      description:
        "Learn about Shakti Doors' journey in manufacturing premium quality doors. Discover our commitment to excellence, craftsmanship, and customer satisfaction.",
      image: 'assets/images/about.jpg',
      keywords:
        'about Shakti Doors, door manufacturer history, door craftsmanship, premium door quality, door manufacturing process',
      canonical: '/about',
      type: 'website',
    });

    // Set organization schema with additional details
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Shakti Doors',
      description:
        'Premium door manufacturer specializing in wooden, steel, and designer doors',
      foundingDate: '2010',
      url: window.location.origin,
      logo: `${window.location.origin}/assets/images/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-78928-47496',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lingnoor-Kapshi Road',
        addressLocality: 'Lingnoor',
        postalCode: '416235',
        addressCountry: 'IN',
      },
    };
    this.seoService.setStructuredData(organizationSchema);

    // Set social media preview
    this.seoService.setSocialMediaPreview({
      title: 'About Shakti Doors - Leading Door Manufacturers in India',
      description:
        'Discover the story behind Shakti Doors and our commitment to manufacturing premium quality doors with excellence and innovation.',
      image: `${window.location.origin}/assets/images/about.jpg`,
      twitterCard: 'summary_large_image',
    });

    // Set breadcrumb
    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' },
    ]);
  }
}
