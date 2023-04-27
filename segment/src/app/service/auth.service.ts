import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signInUrl = '/api/signin';

  constructor(private http: HttpClient) {}

  signIn(username: string, password: string) {
    const credentials = { username, password };
    return this.http.post(this.signInUrl, credentials);
  }
  register(user: User) {
    return this.http.post('http://api.example.com/register', user);
  }
}
