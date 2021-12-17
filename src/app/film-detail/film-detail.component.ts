import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../models/film.model';
import { Personnage } from '../models/personnage.model';
import { FilmService } from '../services/film.service';
import { PersonnageService } from '../services/personnage.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  film:Film=new Film();
  personnages:Personnage[] = []
  constructor(private route:ActivatedRoute, private filmService:FilmService, private personnageService:PersonnageService) { }

  ngOnInit(): void {
    this.film = this.filmService.getFilm(1)
    this.personnages = this.personnageService.getPersonnages(1)
  }

}
