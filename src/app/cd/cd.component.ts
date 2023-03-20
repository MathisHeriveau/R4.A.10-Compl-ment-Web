import { Component, Input } from '@angular/core';
import { CD } from 'src/modele/cd';


@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CDComponent {
  @Input() unCD!: CD;

  onAddCD() {
    this.unCD.quantity++;
  }


}
