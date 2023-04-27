import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signInUrl = '/api/signin';

  constructor(private http: HttpClient) {}

  currentUser: any;

  setCurrentUser(user: any) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  authenticateUser(credentials: any): Observable<any> {
    return this.http.post(this.signInUrl, credentials);
  }

  register(user: User) {
    return this.http.post('http://api.example.com/register', user);
  }
}
