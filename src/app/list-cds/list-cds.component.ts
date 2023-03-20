import { Component, OnInit } from '@angular/core';
import { CD } from 'src/modele/cd';
import { CdsService } from 'src/services/cds.service';

@Component({
  selector: 'app-list-cds',
  templateUrl: './list-cds.component.html',
  styleUrls: ['./list-cds.component.scss']
})
export class ListCDsComponent implements OnInit {
  listCDs!: CD[];

  constructor(private myCDservice: CdsService) { }
  ngOnInit():void {
    this.listCDs = this.myCDservice.getAllCD();
  }

}
