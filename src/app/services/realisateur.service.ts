import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Realisateur } from '../models/realisateur.model';

@Injectable({
  providedIn: 'root'
})
export class RealisateurService {
  private url = 'http://127.0.0.1:8080/realisateur/'
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

  getRealisateurs(): Observable<Realisateur[]>{
    return this.httpClient.get<Realisateur[]>(this.url, {
      headers : this.headers
    });
  }
  
}
