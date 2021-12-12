import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  categories:Categorie[] = []
  constructor(private categorieService:CategorieService) { }

  categoriesControl = new FormControl();
  ngOnInit(): void {
    this.categories = this.categorieService.getCategories()
  }

}
