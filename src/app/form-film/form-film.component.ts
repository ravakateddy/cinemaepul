import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from '../models/categorie.model';
import { Film } from '../models/film.model';
import { Realisateur } from '../models/realisateur.model';
import { CategorieService } from '../services/categorie.service';
import { FilmService } from '../services/film.service';
import { RealisateurService } from '../services/realisateur.service';

@Component({
  selector: 'app-form-film',
  templateUrl: './form-film.component.html',
  styleUrls: ['./form-film.component.scss']
})
export class FormFilmComponent implements OnInit {
  film: Film = new Film();
  films: Film[] = [];

  filmForm: FormGroup = new FormGroup({});
  public realisateurs: Realisateur[] = []
  public categories:Categorie[] = []
  constructor(private filmService:FilmService, private categorieService:CategorieService, private realisateurService:RealisateurService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe(
      cat=>{
        this.categories = cat
      }
    )
    this.realisateurService.getRealisateurs().subscribe(
      rea=>{
        this.realisateurs = rea
      }
    )
    const filmId: number = Number(this.route.snapshot.paramMap.get('id'));
    if(filmId){
      this.filmService.getFilm(filmId).subscribe(film=>{
        this.film = film
        this.setForm()
      })
    }
    

    this.setForm()
    
  }

  save(){
    this.film = new Film().deserialize(this.filmForm.value)
    if(this.film.noFilm){
      this.filmService.updateFilm(this.film).subscribe(film=>{})
      console.log("Updating")
    }else{
      this.filmService.addFilm(this.film).subscribe(film=>{})
    }
    
  }

  setForm(){
    this.filmForm = new FormGroup({
      noFilm: new FormControl(this.film.noFilm),
      titre: new FormControl(this.film.titre, [Validators.required]),
      duree: new FormControl(this.film.duree, [Validators.min(0), Validators.required]),
      dateSortie: new FormControl(this.film.dateSortie, [Validators.required]),
      budget: new FormControl(this.film.budget, [Validators.min(0), Validators.required]),
      montantRecette: new FormControl(this.film.montantRecette, [Validators.min(0), Validators.required]),
      urlImage: new FormControl(this.film.urlImage),
      videoTrailer: new FormControl(this.film.videoTrailer),
      titleImage: new FormControl(this.film.titleImage),
      noRea: new FormControl(this.film.noRea, [Validators.required]),
      codeCat: new FormControl(this.film.codeCat, [Validators.required])
    })
  }

}
