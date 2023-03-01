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

  toString(): string {
    return this.title + " - " + this.artist + " - " + this.genre + " - " + this.price + " - " + this.releaseDate + " - " + this.cover + " - " + this.quantity + " - " + this.onsale;
  }

  toHtml(): string {
    let html = "<div class='card' style='width: 18rem;'>";
    html += "<img src='" + this.cover + "' class='card-img-top' alt='...'>";
    html += "<div class='card-body'>";
    html += "<h5 class='card-title'>" + this.title + "</h5>";
    html += "<p class='card-text'>" + this.artist + "</p>";
    html += "<p class='card-text'>" + this.genre + "</p>";
    html += "<p class='card-text'>" + this.price + "</p>";
    html += "<p class='card-text'>" + this.releaseDate + "</p>";
    html += "<p class='card-text'>" + this.quantity + "</p>";
    html += "<p class='card-text'>" + this.onsale + "</p>";
    html += "</div>";
    html += "</div>";
    return html;

  }

}
