import { Component, OnInit } from '@angular/core';
import {User} from "../shared/modules/User";
import {Router} from "@angular/router";
import {AuthService} from "../core/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userLogin?: string;
  public userMdp?: string;
  public errorMessage: string = '';

  constructor(private unCS: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.unCS.login(<string>this.userLogin, <string>this.userMdp).subscribe(
      response  => {
        if (response)
          this.router.navigate(['accueil']);

      },
      err => {
        this.errorMessage = err.error.message;
        alert('Erreur d\'appel!' + this.errorMessage);
      }
    );
  };

}
