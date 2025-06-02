import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}

  setMetaTags(config: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  }) {
    const baseUrl = window.location.origin;
    const url = config.url || window.location.href;
    const image = config.image
      ? config.image.startsWith('http')
        ? config.image
        : `${baseUrl}${config.image}`
      : '';

    if (config.title) {
      this.title.setTitle(config.title);
      this.meta.updateTag({ property: 'og:title', content: config.title });
      this.meta.updateTag({ name: 'twitter:title', content: config.title });
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

    if (image) {
      this.meta.updateTag({ property: 'og:image', content: image });
      this.meta.updateTag({ name: 'twitter:image', content: image });
    }

    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
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
}
