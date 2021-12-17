import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() { }

  getCategories():Categorie[]{
      return [
        new Categorie().deserialize({
          id: 0,
          libelle: "Action"
        }),
        new Categorie().deserialize({
          id: 1,
          libelle: "Aventure"
        }),
      ]
  }

}
