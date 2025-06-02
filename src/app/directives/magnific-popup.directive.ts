import { Directive, ElementRef, OnInit } from '@angular/core';
import { MagnificPopupService } from '../services/magnific-popup.service';

@Directive({
  selector: '[appMagnificPopup]',
  standalone: true,
})
export class MagnificPopupDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private magnificPopupService: MagnificPopupService
  ) {}

  ngOnInit() {
    this.magnificPopupService.initializeMagnificPopup(this.el.nativeElement);
  }
}
