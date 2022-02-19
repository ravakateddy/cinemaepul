import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private route:ActivatedRoute, private filmService:FilmService, private personnageService:PersonnageService, private router: Router) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.filmService.getFilm(id).subscribe(film=>{
      this.film = film
      this.personnageService.getPersonnages(id).subscribe(perso=>{
        this.personnages = perso
        
      })
    })

    
  }

  deleteFilm(noFilm:any){
    if(confirm("Voulez-vous supprimer ce film?")){
      this.filmService.deleteFilm(noFilm as number).subscribe(()=>{
        this.router.navigateByUrl("/accueil")
      })
    }
    
  }

}
