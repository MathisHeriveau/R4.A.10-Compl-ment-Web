import { Component, OnInit } from '@angular/core';
import { CD } from 'src/modele/cd';

@Component({
  selector: 'app-list-cds',
  templateUrl: './list-cds.component.html',
  styleUrls: ['./list-cds.component.scss']
})
export class ListCDsComponent implements OnInit {
  listCDs!: CD[];

  ngOnInit():void {

    this.listCDs = [
      {
        id: 1,
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        genre: "Rock",
        price: 15.99,
        releaseDate: new Date(1973, 2, 1),
        cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        quantity: 10
      },
      {
        id: 2,
        title: "The Wall",
        artist: "Pink Floyd",
        genre: "Rock",
        price: 15.99,
        releaseDate: new Date(1979, 11, 1),
        cover: "https://upload.wikimedia.org/wikipedia/en/0/0b/Pink_Floyd_-_The_Wall.jpg",
        quantity: 40
      },
      {
        id: 3,
        title: "The Piper at the Gates of Dawn",
        artist: "Pink Floyd",
        genre: "Rock",
        price: 15.99,
        releaseDate: new Date(1967, 6, 1),
        cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        quantity: 90
      },
      {
        id: 4,
        title: "Animals",
        artist: "Pink Floyd",
        genre: "Rock",
        price: 15.99,
        releaseDate: new Date(1977, 1, 1),
        cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        quantity: 20
      },
      {
        id: 5,
        title: "The Freewheelin' Bob Dylan",
        artist: "Bob Dylan",
        genre: "Folk",
        price: 15.99,
        releaseDate: new Date(1963, 5, 1),
        cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        quantity: 0
      },
      {
        id: 6,
        title: "Highway 61 Revisited",
        artist: "Bob Dylan",
        genre: "Folk",
        price: 15.99,
        releaseDate: new Date(1965, 6, 1),
        cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        quantity: 200
      },
      {
        id: 7,
        title: "Blonde on Blonde",
        artist: "Bob Dylan",
        genre: "Folk",
        price: 15.99,
        releaseDate: new Date(1966, 6, 1),
        cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        quantity: 255
      },
      {
        id: 8,
        title: "The Beatles",
        artist: "The Beatles",
        genre: "Rock",
        price: 209.99,
        releaseDate: new Date(1967, 6, 1),
        cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        quantity: 300
      }
    ];
  }

}
