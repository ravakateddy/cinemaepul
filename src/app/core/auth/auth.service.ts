import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import {User} from "../../shared/modules/User";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user!: User;

  constructor(private http: HttpClient) { }

  login(email:string, password:string ): Observable<boolean> {
    const path = environment.endpoint + 'authentification/login';

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });

    let options = {
      headers: httpHeaders
    };

    return this.http.post<any>(path, {'nomUtil': email, 'motPasse': password}, options).pipe(
      map(response => {
        this.saveToken(response.token);
        return true;
      })
    );
  }

  getUser(): User {
    return this.user;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  readToken(): string {
    return localStorage.getItem('token') || '';
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
