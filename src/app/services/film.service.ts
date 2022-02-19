import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private url = 'http://127.0.0.1:8080/film/'
  headers: any;
  constructor(private httpClient:HttpClient) { 
    this.headers = new HttpHeaders({
      'content-type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Bearer ' + localStorage.getItem("token")
    })
  }
  

  getFilms(): Observable<Film[]>{
    return this.httpClient.get<Film[]>(this.url, {
      headers : this.headers
    });
  }

  getFilmsParRealisateur(id:number): Observable<Film[]>{
    return this.httpClient.get<Film[]>(this.url + 'realisateur/'+id, {
      headers : this.headers
    });
  }

  getFilm(id: number): Observable<Film>{
    return this.httpClient.get<Film>(this.url + id, {
      headers : this.headers
    });
  }

  addFilm(film:Film){
    return this.httpClient.post(this.url, film, {headers: this.headers})
  }

  updateFilm(film:Film){
    delete film.categorie;
    delete film.realisateur;
    return this.httpClient.patch(this.url + film.noFilm, film, {headers: this.headers})
  }

  deleteFilm(id:number){
    return this.httpClient.delete(this.url + id, {headers: this.headers})
  }
}
