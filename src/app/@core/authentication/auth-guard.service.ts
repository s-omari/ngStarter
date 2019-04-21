import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.auth.loggedIn()) {
   // If user is logged in according to auth service, return true
      return true;
    } else {
      // navigate to login page , return false.
      this.router.navigate(['./application/public/login']);
      return false;
    }
  }
}
