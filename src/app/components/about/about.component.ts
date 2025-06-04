import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AboutsectionComponent } from '../homelayout/aboutsection/aboutsection.component';
import { WorkingprocessComponent } from "../homelayout/workingprocess/workingprocess.component";
import { ProjectskillsComponent } from '../homelayout/projectskills/projectskills.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TeamComponent } from "../homelayout/team/team.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutsectionComponent, WorkingprocessComponent, ProjectskillsComponent, CarouselModule, TeamComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {
aboutTestimonial: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    margin:15,
    //navSpeed: 600,
    navText: ['<i class="far fa-long-arrow-left"></i>', '<i class="far fa-long-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: false,
  };
}
