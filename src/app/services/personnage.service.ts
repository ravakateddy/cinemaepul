import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnage } from '../models/personnage.model';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {
  private url = 'http://127.0.0.1:8080/personnage/'
  headers: any;
  constructor(private httpClient:HttpClient) {
    this.headers = new HttpHeaders({
      'content-type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Bearer ' + localStorage.getItem("token")
    })
  }

  getPersonnages(nofilm:number): Observable<Personnage[]>{
    return this.httpClient.get<Personnage[]>(this.url+'film/'+nofilm, {
      headers: this.headers
    })
  }

  addPersonnage(personnage:Personnage){
    return this.httpClient.post(this.url+"create/", personnage, {headers: this.headers})
  }
}
