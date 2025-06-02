import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { PerformanceService } from '../../services/performance.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private performanceService: PerformanceService
  ) {}

  ngOnInit() {
    this.setupSEO();
  }

  private setupSEO() {
    // Set meta tags for services page
    this.seoService.setMetaTags({
      title: 'Our Services - Comprehensive Door Solutions | Shakti Doors',
      description:
        'Explore our comprehensive door services including custom design, installation, maintenance, and repair. Professional solutions for residential and commercial needs.',
      image: 'assets/images/services-banner.jpg',
      keywords:
        'door services, door installation, door maintenance, door repair, custom doors, door design, commercial doors, residential doors',
      canonical: '/services',
      type: 'website',
    });

    // Set service schema
    const servicesSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Door Manufacturing and Installation',
      provider: {
        '@type': 'Organization',
        name: 'Shakti Doors',
        url: window.location.origin,
      },
      areaServed: {
        '@type': 'State',
        name: 'Maharashtra',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Door Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Door Design',
              description:
                'Personalized door design services tailored to your specifications',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Professional Installation',
              description: 'Expert door installation by trained technicians',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Maintenance & Repair',
              description: 'Comprehensive door maintenance and repair services',
            },
          },
        ],
      },
    };
    this.seoService.setStructuredData(servicesSchema);

    // Set social media preview
    this.seoService.setSocialMediaPreview({
      title: 'Professional Door Services | Shakti Doors',
      description:
        'Expert door installation, maintenance, and repair services. Quality craftsmanship for all your door needs.',
      image: `${window.location.origin}/assets/images/services-banner.jpg`,
      twitterCard: 'summary_large_image',
    });

    // Set FAQ schema for services
    this.seoService.setFAQSchema([
      {
        question: 'What door services do you offer?',
        answer:
          'We offer comprehensive door services including custom design, professional installation, maintenance, repair, and security upgrades for both residential and commercial properties.',
      },
      {
        question: 'Do you provide after-sales service?',
        answer:
          'Yes, we provide complete after-sales support including maintenance, repairs, and warranty services for all our door installations.',
      },
      {
        question: 'What areas do you service?',
        answer:
          'We primarily serve the Maharashtra region, with service centers in Lingnoor and Sangli Fata. We can accommodate projects throughout the surrounding areas.',
      },
    ]);

    // Set breadcrumb
    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ]);
  }
}
