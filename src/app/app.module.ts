import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {AuthService} from "./shared/providers/auth.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FilmDetailComponent } from './film-detail/film-detail.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {MatChipsModule} from '@angular/material/chips';
import { FormActorComponent } from './form-actor/form-actor.component';
import { FormFilmComponent } from './form-film/form-film.component';
import { FormPersonnageComponent } from './form-personnage/form-personnage.component';
import { ListFilmsComponent } from './core/components/list-films/list-films.component';
import { SearchComponent } from './core/components/search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ListFilmsComponent,
    SearchComponent,
    FilmDetailComponent,
    FormActorComponent,
    FormFilmComponent,
    FormPersonnageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    YouTubePlayerModule,
    MatChipsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
