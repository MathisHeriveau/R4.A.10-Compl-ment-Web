import { Component, Input, OnInit } from '@angular/core';
import { CD } from 'src/modele/cd';
import { CdsService } from 'src/services/cds.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CDComponent implements OnInit {
  @Input() leCD!: CD; // Réçu par la template listCD
  unCD!: CD; // utilise par la template cd
  idcd!: string;

  constructor(private cdsService: CdsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idcd = this.route.snapshot.params['id'];
    if (this.idcd) {
      this.unCD = this.cdsService.getCDById(+this.idcd);
    }
    else {
      this.unCD = this.leCD;
    }
  }

  onAddCD() {
    this.leCD.quantity++;
  }


}
