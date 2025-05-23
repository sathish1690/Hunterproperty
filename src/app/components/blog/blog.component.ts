import { Component } from '@angular/core';
import { HomeblogComponent } from '../homelayout/homeblog/homeblog.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HomeblogComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
