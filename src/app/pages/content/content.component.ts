import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/datafake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Input()
  photoCover: string = '';
  @Input()
  contentTitle: string = '';
  @Input()
  contentDescription: string = '';
  // variaveis dinimicas
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }
  setValuesToComponent(id: string | null) {
    var card = [];
    const result = dataFake.filter((article) => article.id == id)[0];
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
