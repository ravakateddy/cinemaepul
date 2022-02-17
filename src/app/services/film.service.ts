import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private url = 'http://127.0.0.1:8080/film'
  headers = new HttpHeaders()
  constructor(private httpClient:HttpClient) { 
    this.headers.set('content-type', 'application/json')
    .set('Cache-Control', 'no-cache')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization', 'Bearer ' + localStorage.getItem("token"))
  }
  

  getFilms(): Observable<Film[]>{
    return this.httpClient.get<Film[]>(this.url, {
      headers : this.headers
    });
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
