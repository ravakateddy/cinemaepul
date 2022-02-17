import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { Film } from '../models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  private apiLoaded = false;
  private films:Film[] = [];
  @Input() videoId: string = "";
  playerConfig = {
    controls: 0,
    mute: 1,
    loop: 1,
    showinfo: 0,
    disablekb: 1
  };
  constructor(private filmService: FilmService) {
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
      console.log(this.films)
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
    console.log(event)
  }
  

}
