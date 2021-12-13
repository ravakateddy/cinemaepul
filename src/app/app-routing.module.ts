import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FormActorComponent } from './form-actor/form-actor.component';
import { FormFilmComponent } from './form-film/form-film.component';
import { FormPersonnageComponent } from './form-personnage/form-personnage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./core/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accueil'
  },
  {path: 'accueil', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'formFilm', component:FormFilmComponent},
  {path: 'formActor', component:FormActorComponent},
  {path: 'formPersonnage', component:FormPersonnageComponent},
  {path: 'formPersonnage/:id', component:FormPersonnageComponent},
  {path: 'formActor/:id', component:FormActorComponent},
  {path: 'films/:id', component:FilmDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
