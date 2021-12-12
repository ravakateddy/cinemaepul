import { Component, OnInit } from '@angular/core';
import {User} from "../shared/modules/User";
import {Router} from "@angular/router";
import {AuthService} from "../shared/providers/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userLogin?: string;
  public userMdp?: string;
  public lblMessage?: string;
  public estCache: boolean = true;
  public errorMessage: string = '';

  constructor(private unCS: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {

    let pwdmd5: string;
    let unUt: User;

    unUt = new User();
    unUt.nomUtil = this.userLogin;
    unUt.motPasse = this.userMdp;
    this.unCS.getLogin(unUt).subscribe(
      reponse  => {
        console.log(reponse.token);
        alert('Authentification réussie !!!');
        // on sauvegarde le token danune variable de session
        window.localStorage.setItem("token", reponse.token);
        this.router.navigate(['accueil']);

      },
      err => {
        this.errorMessage = err.error.message;
        alert('Erreur d\'appel!' + this.errorMessage);
      }
    );
  };

}
