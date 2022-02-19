import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Acteur } from '../models/acteur.model';
import { Categorie } from '../models/categorie.model';
import { Film } from '../models/film.model';
import { Personnage } from '../models/personnage.model';
import { ActeurService } from '../services/acteur.service';
import { FilmService } from '../services/film.service';
import { PersonnageService } from '../services/personnage.service';

@Component({
  selector: 'app-form-personnage',
  templateUrl: './form-personnage.component.html',
  styleUrls: ['./form-personnage.component.scss']
})
export class FormPersonnageComponent implements OnInit {
  private personnage: Personnage = new Personnage();
  personnageForm: FormGroup = new FormGroup({});
  films: Film[] = []
  acteurs : Acteur[] = []
  constructor(private personnageService:PersonnageService, private acteurService:ActeurService, private filmService:FilmService) { }

  ngOnInit(): void {
    this.personnageForm = new FormGroup({
      nomPers: new FormControl(this.personnage.nomPers, [Validators.required]),
      noAct: new FormControl(this.personnage.noAct, [Validators.required]),
      noFilm: new FormControl(this.personnage.noFilm, [Validators.required]),
    })
    this.filmService.getFilms().subscribe(
      f=>{
        this.films = f
      }
    )
    this.acteurService.getActeurs().subscribe(
      a=>{
        this.acteurs = a
      }
    )
  }

  save(){
    this.personnage = new Personnage().deserialize(this.personnageForm.value)
    this.personnageService.addPersonnage(this.personnage).subscribe(personnage=>{})
  }

}
