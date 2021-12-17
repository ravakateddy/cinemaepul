import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getFilms(): Film[]{
    return [
      new Film().deserialize({
        id: 0,
        title: "The assassin",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, at dolore non a nihil modi. Reiciendis, odit. Repellat quos doloremque a voluptate illo nisi, eum est fuga doloribus veritatis, iste maiores fugiat, odit adipisci perferendis obcaecati nobis esse delectus. Perferendis quis dolores eum quo expedita dolore neque nihil eius fuga!",
        imageUrl: "http://images.fandango.com/images/masterrepository/Fandango/186260/theAssassin.jpg",
        type: "Action"
      }),
      new Film().deserialize({
        id: 1,
        title: "King Arthur",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, at dolore non a nihil modi. Reiciendis, odit. Repellat quos doloremque a voluptate illo nisi, eum est fuga doloribus veritatis, iste maiores fugiat, odit adipisci perferendis obcaecati nobis esse delectus. Perferendis quis dolores eum quo expedita dolore neque nihil eius fuga!",
        imageUrl: "https://cdn.shopify.com/s/files/1/1416/8662/products/King_Arthur_2004_original_film_art_spo_2000x.jpg?v=1540955023",
        type: "Action"
      }),
      new Film().deserialize({
        id: 2,
        title: "Joker",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, at dolore non a nihil modi. Reiciendis, odit. Repellat quos doloremque a voluptate illo nisi, eum est fuga doloribus veritatis, iste maiores fugiat, odit adipisci perferendis obcaecati nobis esse delectus. Perferendis quis dolores eum quo expedita dolore neque nihil eius fuga!",
        imageUrl: "https://i.pinimg.com/originals/5f/d5/43/5fd543b6bb7ebe666edbc8f995c57933.jpg",
        type: "Action"
      }),
      new Film().deserialize({
        id: 3,
        title: "Fast and furious",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, at dolore non a nihil modi. Reiciendis, odit. Repellat quos doloremque a voluptate illo nisi, eum est fuga doloribus veritatis, iste maiores fugiat, odit adipisci perferendis obcaecati nobis esse delectus. Perferendis quis dolores eum quo expedita dolore neque nihil eius fuga!",
        imageUrl: "https://m.media-amazon.com/images/I/61qTEPIUzML._AC_SY679_.jpg",
        type: "Action"
      }),
    ]
  }

  getFilm(id:number):Film{
    return new Film().deserialize({
      id: 1,
      title: "The assassin",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, at dolore non a nihil modi. Reiciendis, odit. Repellat quos doloremque a voluptate illo nisi, eum est fuga doloribus veritatis, iste maiores fugiat, odit adipisci perferendis obcaecati nobis esse delectus. Perferendis quis dolores eum quo expedita dolore neque nihil eius fuga!",
      imageUrl: "http://images.fandango.com/images/masterrepository/Fandango/186260/theAssassin.jpg",
      type: "Action"
    })
  }
}
