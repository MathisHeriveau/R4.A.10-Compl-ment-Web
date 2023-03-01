import { Component } from '@angular/core';
import { CD } from 'src/modele/cd';

@Component({
  selector: 'app-list-cds',
  templateUrl: './list-cds.component.html',
  styleUrls: ['./list-cds.component.scss']
})
export class ListCDsComponent {
  listCDs!: CD;
  constructor() { }

  ngOnInit(): void {
    this.listCDs = new CD("The Dark Side of the Moon", "Pink Floyd", "Rock", 20, new Date(1973, 2, 1), "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png", 20, true);

  }

  toHtml(): string {
    return this.listCDs.toHtml();
  }

}
