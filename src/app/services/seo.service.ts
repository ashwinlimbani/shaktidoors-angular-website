import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private meta: Meta, private title: Title) {
    // Set default meta tags that should be present on all pages
    this.setDefaultMetaTags();
  }

  private setDefaultMetaTags() {
    this.meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Shakti Doors' },
      { name: 'language', content: 'English' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Shakti Doors' },
      { name: 'twitter:site', content: '@shaktidoors' },
      { name: 'twitter:creator', content: '@shaktidoors' },
      { name: 'format-detection', content: 'telephone=no' },
    ]);
  }

  setMetaTags(config: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    keywords?: string;
    canonical?: string;
    type?: string;
  }) {
    const baseUrl = window.location.origin;
    const url = config.url || window.location.href;
    const image = config.image
      ? config.image.startsWith('http')
        ? config.image
        : `${baseUrl}${config.image}`
      : '';

    // Update basic meta tags
    if (config.title) {
      const fullTitle = `${config.title} | Shakti Doors - Premium Door Manufacturers`;
      this.title.setTitle(fullTitle);
      this.meta.updateTag({ property: 'og:title', content: fullTitle });
      this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    }

    if (config.description) {
      this.meta.updateTag({ name: 'description', content: config.description });
      this.meta.updateTag({
        property: 'og:description',
        content: config.description,
      });
      this.meta.updateTag({
        name: 'twitter:description',
        content: config.description,
      });
    }

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    if (config.canonical) {
      const link: HTMLLinkElement =
        document.querySelector('link[rel="canonical"]') ||
        document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute(
        'href',
        config.canonical.startsWith('http')
          ? config.canonical
          : `${baseUrl}${config.canonical}`
      );
      if (!document.querySelector('link[rel="canonical"]')) {
        document.head.appendChild(link);
      }
    }

    // Update OpenGraph and Twitter meta tags
    if (image) {
      this.meta.updateTag({ property: 'og:image', content: image });
      this.meta.updateTag({ name: 'twitter:image', content: image });
      this.meta.updateTag({ property: 'og:image:width', content: '1200' });
      this.meta.updateTag({ property: 'og:image:height', content: '630' });
      this.meta.updateTag({
        property: 'og:image:alt',
        content: config.title || 'Shakti Doors Product',
      });
    }

    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({
      property: 'og:type',
      content: config.type || 'website',
    });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    // Add locale information
    this.meta.updateTag({ property: 'og:locale', content: 'en_US' });
    this.meta.updateTag({ property: 'og:locale:alternate', content: 'en_GB' });
  }

  setStructuredData(data: any) {
    let scriptElement =
      document.querySelector<HTMLScriptElement>('#structured-data');

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'structured-data';
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify(data);
  }

  // Method to set organization schema
  setOrganizationSchema() {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Shakti Doors',
      url: window.location.origin,
      logo: `${window.location.origin}/assets/images/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-234-567-8900',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      sameAs: [
        'https://facebook.com/shaktidoors',
        'https://twitter.com/shaktidoors',
        'https://instagram.com/shaktidoors',
        'https://linkedin.com/company/shaktidoors',
      ],
    };
    this.setStructuredData(organizationSchema);
  }

  setBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${window.location.origin}${crumb.url}`,
      })),
    };
    this.setStructuredData(breadcrumbSchema);
  }

  setFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
    this.setStructuredData(faqSchema);
  }

  setProductSchema(product: {
    name: string;
    description: string;
    image: string;
    category: string;
    material: string;
    dimensions: string;
    price?: string;
    availability?: string;
  }) {
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: product.image.startsWith('http')
        ? product.image
        : `${window.location.origin}/${product.image}`,
      category: product.category,
      material: product.material,
      size: product.dimensions,
      ...(product.price && {
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'INR',
          availability: product.availability || 'https://schema.org/InStock',
        },
      }),
      brand: {
        '@type': 'Brand',
        name: 'Shakti Doors',
      },
    };
    this.setStructuredData(productSchema);
  }

  setSocialMediaPreview(config: {
    title: string;
    description: string;
    image: string;
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  }) {
    // Facebook OpenGraph
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });

    // Twitter Card
    this.meta.updateTag({
      name: 'twitter:card',
      content: config.twitterCard || 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description,
    });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    // WhatsApp
    this.meta.updateTag({ property: 'og:site_name', content: 'Shakti Doors' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
