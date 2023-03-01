export class CD{

  id!: number;
  title!: string;
  artist!: string;
  genre!: string;
  price!: number;
  releaseDate!: Date;
  cover!: string;
  quantity!: number;
  onsale?: boolean;

  constructor(title: string, artist: string, genre: string, price: number, releaseDate: Date, cover: string, quantity: number, onsale?: boolean) {
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.price = price;
    this.releaseDate = releaseDate;
    this.cover = cover;
    this.quantity = quantity;
    if (onsale != undefined) {
      this.onsale = onsale;
    }else{
      this.onsale = false;
    }
  }

}
