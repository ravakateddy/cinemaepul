import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.scss']
})
export class ListFilmsComponent implements OnInit {
  films: Film[] = []
  constructor(private filmService:FilmService) { }

  ngOnInit(): void {
    this.films = this.filmService.getFilms()
  }

}
