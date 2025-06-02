import { Injectable } from '@angular/core';

interface PerformanceEntryWithTiming extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

@Injectable({
  providedIn: 'root',
})
export class PerformanceService {
  constructor() {
    this.observeCWV();
  }

  private observeCWV() {
    if ('PerformanceObserver' in window) {
      // Observe LCP
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime / 1000, 'seconds');
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Observe FID
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEntryWithTiming;
          console.log(
            'FID:',
            fidEntry.processingStart - fidEntry.startTime,
            'milliseconds'
          );
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Observe CLS
      const clsObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            console.log('CLS:', (entry as any).value);
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Observe Navigation Timing
      const navigationObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation Timing:', {
            'DNS lookup': navEntry.domainLookupEnd - navEntry.domainLookupStart,
            'Connection time': navEntry.connectEnd - navEntry.connectStart,
            'First byte': navEntry.responseStart - navEntry.requestStart,
            'DOM Interactive': navEntry.domInteractive,
            'DOM Complete': navEntry.domComplete,
          });
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
    }
  }
}
