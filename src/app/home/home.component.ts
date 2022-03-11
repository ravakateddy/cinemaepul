import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { Film } from '../models/film.model';
import { FilmService } from 'src/app/services/film.service';
import { CategorieService } from '../services/categorie.service';
import { RealisateurService } from '../services/realisateur.service';
import { Categorie } from '../models/categorie.model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  private apiLoaded = false;
  categories:any[] = []
  public films:Film[] = [];
  public filmsView :Film[] = [];
  public selectedCategories: any[] = []
  public q:string = "";
  @Input() videoId: string = "";
  playerConfig = {
    controls: 0,
    mute: 1,
    loop: 1,
    showinfo: 0,
    disablekb: 1
  };


  constructor(private filmService: FilmService, private categorieService: CategorieService, private realisateurService: RealisateurService) {
   }

  ngOnInit(): void {
    if(!this.apiLoaded) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            this.apiLoaded = true;
          }
    this.filmService.getFilms().subscribe(films=>{
      this.films = films
      this.applyFilter()
    })
    this.categorieService.getCategories().subscribe(cat=>{
      cat.map((c: any)=>{
        c.state = true
      })
      this.categories = cat
      this.applyFilter()
    })
    
        
  }

  onReady(event:any): void {
    var embedCode = event.target.getVideoEmbedCode();
    event.target.playVideo()
  }

  change(event: any): void{
    console.log(event.target.playVideo())
    if(event.data===-1){
      event.target.playVideo()
    }
  }

  err(event: any){
  }

  applyFilter(){
    this.selectedCategories = this.categories.filter((c, i, a)=>{return c.state===true})
    this.selectedCategories = this.selectedCategories.map(c=>{return c.codeCat})
    this.filmsView = this.films.filter((val, index, arr)=>{
      return this.selectedCategories.includes(val.codeCat)
    })


  }

  searchFilms(){
    
  }

  updateFilms(event:string){
    this.filmService.searchFilms(event).subscribe(
      f=>{
        this.films = f;
        this.applyFilter()
      }
    )
    
  }


}
