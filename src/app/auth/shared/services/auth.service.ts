import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthResponseData } from '../models/authResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAL9VQWiO5fra1Q547lsT68X8Pb4TXsRK0', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(map((response: AuthResponseData) => {
      console.log(response);
    }))
  }
}
