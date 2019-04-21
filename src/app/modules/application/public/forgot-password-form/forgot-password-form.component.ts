import {PublicService} from '../public.service';
import { ValidationService } from '../../../../@core/services/validation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface Iuser {
  email: string;
}

class User implements Iuser {
  public email: string = null;
  constructor() { }
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {


  user = new User();
  invalidUsers = false;
  requestStatus: string = null;
  isSubmitting = false;

  constructor(
    public validationSer: ValidationService,
    public publicService: PublicService
  ) { }


  ngOnInit() {
  }

  // Send a request to backend to send out a password reset email.
  // Return UI message to user on success/fail
  public resetPassword(e: Event) {
    this.isSubmitting = true;
    this.publicService.resetPassword(this.user).subscribe((res: Response) => {
      this.requestStatus = 'success';
    }, (error) => {
      this.isSubmitting = false;
      this.requestStatus = 'invalid email';
      console.log(error.json());
    }, () => {
      this.isSubmitting = false;
    });
  }

}
