import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  loggedIn() {
    // return true if auth token is stored
    const token = localStorage.getItem('token');
    const isTokenStored = (token) ? true : false;

    return isTokenStored;
  }
}
