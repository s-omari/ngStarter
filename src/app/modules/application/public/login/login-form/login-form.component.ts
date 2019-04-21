import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../../@core/services/user.service';
import {PublicService} from '../../public.service';

interface ICredentials {
  email: string;
  password: string;
}

class Credentials implements ICredentials {
  public email: string = null;
  public password: string = null;

  constructor(email?: string, password?: string) {
    this.email = email ? email : null;
    this.password = password ? password : null;
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  credentials = new Credentials();
  invalidCredentials = false;
  isSubmitting = false;

  constructor(
    private router: Router,
    private userService: UserService,
    public publicService: PublicService
  ) {
    console.log('login component constructor');
  }

  // Send login request to backend using login service
  login() {
    console.log(this.credentials);
    // Display spinner while isSubmitting = true
    this.isSubmitting = true;

    this.publicService.login(this.credentials)
      .subscribe((res) => {

        if (res && res.json()) {
        const response = res.json();
        // store token if it is returned as a result of login
        this.userService.setToken(JSON.stringify(response.data.token));
        // store user data if returned as a result of login
        this.userService.setUser(response.data.user);
        }

        // Set token and user data in localStorage on success
        const encodedToken = btoa(this.credentials.email + ':' + this.credentials.password);
        this.userService.setToken(encodedToken);

        // redirect to restricted
        this.router.navigate(['application/restricted']);
      }, (error) => {
        console.log('error' , error);
        // hide spinner when isSubmitting = false
        this.isSubmitting = false;
        // display invalid credentials message
        this.invalidCredentials = true;
      });
  }

}
