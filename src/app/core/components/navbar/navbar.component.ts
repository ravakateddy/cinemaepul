import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';
import { RealisateurService } from 'src/app/services/realisateur.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  

  @Output() recherche = new EventEmitter<string>();
  public q:string="";
  // Filtre
  url: string = ""
  constructor(private realisateurService: RealisateurService, private filmService: FilmService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.url = this.route.snapshot.url.join("/")
    console.log(this.url)
  }

  keyup(){
    this.recherche.emit(this.q);
  }
}
