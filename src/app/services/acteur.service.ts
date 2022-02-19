import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acteur } from '../models/acteur.model';

@Injectable({
  providedIn: 'root'
})
export class ActeurService {

  private url = 'http://127.0.0.1:8080/acteur/'
  headers: any;
  constructor(private httpClient:HttpClient) { 
    this.headers = new HttpHeaders({
      'content-type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Bearer ' + localStorage.getItem("token")
    })
  }

  addActeur(acteur:Acteur){
    return this.httpClient.post(this.url, acteur, {headers: this.headers})
  }

  getActeurs(): Observable<Acteur[]>{
    return this.httpClient.get<Acteur[]>(this.url, {headers: this.headers})
  }
}
