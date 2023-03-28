import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import {map, Observable} from "rxjs";
import {CD} from "../../modele/cd";

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrls: ['./new-cd.component.scss']
})
export class NewCDComponent implements OnInit{

  formulaire!: FormGroup;
  currenCD$!: Observable<CD>

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      title: [null],
      artist: [null],
      genre: [null],
      price: [null],
      releaseDate: [null],
      cover: [null],
      quantity: [null]
    });

    this.currenCD$ = this.formulaire.valueChanges.pipe(map(formValue => (
      {
        id: 0,
        title: formValue.title,
        artist: formValue.artist,
        genre: formValue.genre,
        price: formValue.price,
        releaseDate: formValue.releaseDate,
        cover: formValue.cover,
        quantity: formValue.quantity
      } as CD
    )));
  }

  addCD() {
    console.log(this.formulaire.value);
  }

}
