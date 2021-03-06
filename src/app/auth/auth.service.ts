import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs/operators';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Moment } from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'https://items-api-aaron.herokuapp.com/users';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  // TODO: maybe remove this
  // isLoggedOut(): boolean {
  //   return !this.isLoggedIn();
  // }

  login(user: User): Observable<{}> {
    return this.http.post<User>(this.authUrl, user).pipe(
      tap(response => this.setSession(response)),
      shareReplay(),
    );
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigateByUrl('/login');
  }

  getExpiration(): Moment {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  setSession(authResult): void {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    console.log(authResult);
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  // TODO: maybe remove this
  // signup(user: User): Observable<{}> {
  //   return this.http.post<User>(this.authUrl + 'login', user).pipe(
  //     tap(response => this.setSession(response)),
  //     shareReplay(),
  //   );
  // }
}
