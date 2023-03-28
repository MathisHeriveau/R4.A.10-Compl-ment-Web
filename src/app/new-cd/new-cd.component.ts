import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
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

    const dateRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp|bmp|ico|tiff|jfif|pjpeg|pjp)$');

    this.formulaire = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      artist: [null, [Validators.required, Validators.minLength(1)]],
      genre: [null, [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(0)]],
      releaseDate: [null, [Validators.required, Validators.pattern(dateRegex)]],
      cover: [null, [Validators.required]],
      quantity: [null, [Validators.required, Validators.min(0)]]
    }, {
      updateOn: 'blur'
    })

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
