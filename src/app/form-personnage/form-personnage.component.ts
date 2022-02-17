import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Categorie } from '../models/categorie.model';

@Component({
  selector: 'app-form-personnage',
  templateUrl: './form-personnage.component.html',
  styleUrls: ['./form-personnage.component.scss']
})
export class FormPersonnageComponent implements OnInit {
  formPersonnage: any;
  categories:Categorie[] = []
  constructor() { }

  ngOnInit(): void {
    this.formPersonnage = new FormGroup({
      
    })
  }

}
