import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { PerformanceService } from '../../services/performance.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private performanceService: PerformanceService
  ) {}

  ngOnInit() {
    this.setupSEO();
  }

  private setupSEO() {
    // Set meta tags for contact page
    this.seoService.setMetaTags({
      title: 'Contact Shakti Doors - Get in Touch With Us',
      description:
        'Contact Shakti Doors for premium door solutions. Reach out to our team for inquiries, quotes, or support. Multiple locations in Maharashtra to serve you better.',
      image: 'assets/images/contact-banner.jpg',
      keywords:
        'contact Shakti Doors, door manufacturer contact, door installation quote, door service inquiry, door company location',
      canonical: '/contact',
      type: 'website',
    });

    // Set local business schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Shakti Doors',
      image: `${window.location.origin}/assets/images/logo.png`,
      '@id': window.location.origin,
      url: window.location.origin,
      telephone: '+91-78928-47496',
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: 'Lingnoor-Kapshi Road',
          addressLocality: 'Lingnoor',
          postalCode: '416235',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: 'Sangli Fata, Near Korgavkar Petrol Pump',
          addressLocality: 'Kagal',
          addressRegion: 'Kolhapur',
          addressCountry: 'IN',
        },
      ],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '16.7050',
        longitude: '74.2433',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
      sameAs: [
        'https://facebook.com/shaktidoors',
        'https://twitter.com/shaktidoors',
        'https://instagram.com/shaktidoors',
        'https://linkedin.com/company/shaktidoors',
      ],
    };
    this.seoService.setStructuredData(localBusinessSchema);

    // Set social media preview
    this.seoService.setSocialMediaPreview({
      title: 'Contact Shakti Doors - Premium Door Manufacturers',
      description:
        'Get in touch with Shakti Doors for all your door needs. Professional consultation and support available.',
      image: `${window.location.origin}/assets/images/contact-banner.jpg`,
      twitterCard: 'summary_large_image',
    });

    // Set FAQ schema for contact page
    this.seoService.setFAQSchema([
      {
        question: 'How can I get a quote for doors?',
        answer:
          'You can get a quote by filling out our contact form, calling us at +91-78928-47496, or visiting one of our locations in Lingnoor or Sangli Fata.',
      },
      {
        question: 'What are your business hours?',
        answer:
          'We are open Monday through Saturday from 9:00 AM to 6:00 PM. We are closed on Sundays and major holidays.',
      },
      {
        question: 'Do you provide door consultations?',
        answer:
          'Yes, we provide free consultations to help you choose the right door for your needs. You can schedule a consultation by contacting our team.',
      },
    ]);

    // Set breadcrumb
    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ]);
  }
}
