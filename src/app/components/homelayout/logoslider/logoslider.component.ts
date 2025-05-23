import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-logoslider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './logoslider.component.html',
  styleUrl: './logoslider.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LogosliderComponent {
logoSlide: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    //navSpeed: 600,
    navText: ['<i class="far fa-long-arrow-left"></i>', '<i class="far fa-long-arrow-right"></i>'],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      760: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
    nav: false,
  };
}
