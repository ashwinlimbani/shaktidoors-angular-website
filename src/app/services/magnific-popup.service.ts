import { Injectable } from '@angular/core';
declare var $: any;

interface MagnificPopupCallbacks {
  st: {
    image: {
      markup: string;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class MagnificPopupService {
  initializeMagnificPopup(element: string) {
    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
        tCounter: '%curr% of %total%',
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      },
      image: {
        verticalFit: true,
        titleSrc: function (item: any) {
          return item.el.attr('title');
        },
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function (openerElement: any) {
          return openerElement.is('img')
            ? openerElement
            : openerElement.find('img');
        },
      },
      callbacks: {
        beforeOpen: function (this: MagnificPopupCallbacks) {
          // Add custom class for better arrow styling
          this.st.image.markup = this.st.image.markup.replace(
            'mfp-figure',
            'mfp-figure mfp-with-anim'
          );
        },
      },
      closeOnContentClick: false,
      closeBtnInside: false,
      removalDelay: 300,
    });
  }
}
