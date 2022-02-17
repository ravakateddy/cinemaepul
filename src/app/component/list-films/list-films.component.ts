import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.scss']
})
export class ListFilmsComponent implements OnInit {
  @Input()
  films: Film[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
