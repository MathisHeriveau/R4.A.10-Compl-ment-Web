import { Injectable } from '@angular/core';
import { CD } from 'src/modele/cd';


@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getAllCD():CD[]{
    return [
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
        cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/The_Wall_Cover.svg/1200px-The_Wall_Cover.svg.png",
        quantity: 40
      },
      {
        id: 3,
        title: "The Piper at the Gates of Dawn",
        artist: "Pink Floyd",
        genre: "Rock",
        price: 15.99,
        releaseDate: new Date(1967, 6, 1),
        cover: "http://www.albumrock.net/dyn_img/pochettes_album/1087_150.jpg",
        quantity: 90
      },
      {
        id: 4,
        title: "Animals",
        artist: "Pink Floyd",
        genre: "Rock",
        price: 15.99,
        releaseDate: new Date(1977, 1, 1),
        cover: "https://www.rollingstone.fr/wp-content/uploads/2021/01/pink-floyd-animals.jpg",
        quantity: 20
      },
      {
        id: 5,
        title: "The Freewheelin' Bob Dylan",
        artist: "Bob Dylan",
        genre: "Folk",
        price: 15.99,
        releaseDate: new Date(1963, 5, 1),
        cover: "https://www.rollingstone.fr/wp-content/uploads/2022/07/the-freewheelin-bob-dylan.jpg",
        quantity: 0
      },
      {
        id: 6,
        title: "Highway 61 Revisited",
        artist: "Bob Dylan",
        genre: "Folk",
        price: 15.99,
        releaseDate: new Date(1965, 6, 1),
        cover: "https://res.cloudinary.com/jerrick/image/upload/v1563653406/gcthn3p7cmym7nyahpet.jpg",
        quantity: 200
      },
      {
        id: 7,
        title: "Blonde on Blonde",
        artist: "Bob Dylan",
        genre: "Folk",
        price: 15.99,
        releaseDate: new Date(1966, 6, 1),
        cover: "https://fr.shopping.rakuten.com/photo/2114107326_ML.jpg",
        quantity: 255
      },
      {
        id: 8,
        title: "The Beatles",
        artist: "The Beatles",
        genre: "Rock",
        price: 209.99,
        releaseDate: new Date(1967, 6, 1),
        cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/The_Beatles_i_H%C3%B6torgscity_1963.jpg/220px-The_Beatles_i_H%C3%B6torgscity_1963.jpg",
        quantity: 300
      }
    ];
  }

  getCDById(id:number):CD{
    const cd = this.getAllCD().find( (cd:CD) => cd.id === id);
    if(cd){
      return cd;
    }else
      throw new Error("CD introuvable");
  }

}
