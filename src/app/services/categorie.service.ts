import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private url = 'http://127.0.0.1:8080/categorie/'
  headers:any
  cheaders: any;
  constructor(private httpClient:HttpClient) { 
    this.headers = new HttpHeaders({
      'content-type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Bearer ' + localStorage.getItem("token")
    })
  }

  getCategories(): Observable<Categorie[]>{
    return this.httpClient.get<Categorie[]>(this.url, {
      headers : this.headers
    });
  }

}
