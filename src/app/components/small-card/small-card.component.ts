import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContentComponent } from '../../pages/content/content.component';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ContentComponent],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  Id: string = '0';
}
