import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-aboutsection',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './aboutsection.component.html',
  styleUrl: './aboutsection.component.scss'
})
export class AboutsectionComponent {

}
