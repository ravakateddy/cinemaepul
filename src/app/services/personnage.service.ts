import { Injectable } from '@angular/core';
import { Personnage } from '../models/personnage.model';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {


  constructor() { }

  getPersonnages(filmId:number):Personnage[]{
    return [
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
      new Personnage().deserialize({
        nomPers: "Doe",
        prenPers: "John"
      }),
    ]
  }
}
