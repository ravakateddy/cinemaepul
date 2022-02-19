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

  

  @Output() recherche = new EventEmitter<Film[]>();
  // Filtre
  public selectedSearch: any = {};
  searchAutocomplete: any[] = [];
  filteredOptions: Observable<any[]> = new Observable();
  formAutoComplete = new FormControl();
  url: string = ""
  constructor(private realisateurService: RealisateurService, private filmService: FilmService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.realisateurService.getRealisateurs().subscribe(rea=>{
      // Autocomplete
      this.searchAutocomplete = rea.map(c => {
        return {id: c.noRea, name: c.nomRea + ' ' + c.prenRea, visible: true}
    })
    this.filteredOptions = this.formAutoComplete.valueChanges
        .pipe(
            startWith(''),
            map(value => (typeof value === 'string' ? value : value.name)),
            map(name => (name ? this._filter(name) : []))
        );
    })
    this.url = this.route.snapshot.url.join("/")
    console.log(this.url)
  }

  /**
     * Récupérer le réalisateur sélectionné dans la recherche
     * @param selected 
     */
   getSelectedOptions(selected:any) {
    this.selectedSearch = selected;
    this.filmService.getFilmsParRealisateur(selected.id).subscribe(
      films=>{
        this.recherche.emit(films)
      }
    )
}

/**
     * Filtrer l'autocomplete
     */
 private _filter(value:any): string[] {
  const filterValue = value.toLowerCase();
  return this.searchAutocomplete.filter(c => c.name.toLowerCase().includes(filterValue) && c.visible);
}

/**
     * Afficher le réalisateur sélectionné dans la recherche
     * @param user
     * @returns
     */
 displayFn(user:any): string {
  return user && user.name ? user.name : '';
}

/**
     * Réinitialise le réalisateur séléctionné
     */
 resetAutocomplete() {
  this.selectedSearch = {};
}

  

}
