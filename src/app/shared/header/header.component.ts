import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  goToWhatsApp(): void {
  const phoneNumber = '7550110784'; // Use international format, no + or spaces
  const url = `https://wa.me/${phoneNumber}`;
  window.open(url, '_blank');
}
callNow(): void {
  const phoneNumber = '7550110784'; // Include country code if needed
  window.location.href = `tel:${phoneNumber}`;
}
}
