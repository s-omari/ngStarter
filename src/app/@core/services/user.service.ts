import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

interface Iuser {
    access_token: string;
    token_type: string;
    expire_in: number;
    name: string;
    email: string;
    userId: string;
    permission: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl = environment.baseUrl;

  user: Iuser;
  token: string;


  /**
   * Assign user and token if exists.
   */
  constructor() {
      const user = localStorage.getItem('userData');

      if (user) {
          this.user = JSON.parse(user);
      }

      this.token = localStorage.getItem('token');
  }


  /**
   * Get token value.
   */
  getToken() {
      return this.token;
  }


  /**
   * Set token and store it in local strorage.
   * @param token
   */
  setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token);
      // localStorage.setItem('token', JSON.stringify(token));

  }


  /**
   * Get current user.
   */
  getUser() {
      return this.user;
  }


  /**
   * Set user and store it in local strorage.
   * @param user
   */
  setUser(user: Iuser) {
      this.user = user;
      localStorage.setItem('userData', JSON.stringify(user));
  }


  /**
   * logout user.
   */
  logOut() {
      localStorage.removeItem('userData');
      localStorage.removeItem('token');
      location.reload();
  }
}