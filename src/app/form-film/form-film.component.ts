import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { Film } from '../models/film.model';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-form-film',
  templateUrl: './form-film.component.html',
  styleUrls: ['./form-film.component.scss']
})
export class FormFilmComponent implements OnInit {
  private film?: Film;
  public categories:Categorie[] = []
  constructor(private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.categories = this.categorieService.getCategories()
  }

}
