import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface User {
  name: string,
  email: string,
  gender: string
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  storeUserData(userData: User) {
    this.http.post("https://test-app-7a0cb-default-rtdb.firebaseio.com/user.json()", userData).subscribe(response => {
      console.log(response);
    })
  }
}

