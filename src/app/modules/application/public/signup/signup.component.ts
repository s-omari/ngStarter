import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../../../@core/services/validation.service';
import { Iuser, User } from '../../../../@core/models/user.model';

import {PublicService} from '../public.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  user: Iuser;
  requestStatus: string = null;
  isSubmitting = false;

  constructor(
    // private signupService: SignupService,
    public validationService: ValidationService,
    public publicService: PublicService) {
    this.user = new User();
  }
  ngOnInit() {
  }

  signUp(e: any) {
    this.isSubmitting = true;
    this.publicService.signUp(this.user)
      .subscribe((res: Response) => {
        this.isSubmitting = false;
        this.requestStatus = 'success';
      }, (error) => {
        this.isSubmitting = false;
        this.requestStatus = 'email already exists';
        const errors = error.json().errors;

        // log all returned error messages to console
        const errorsArray = [];
        for (const errorText in errors) {
          if (errors.hasOwnProperty(errorText)) {
            errorsArray.push(errors[errorText]);
          }
        }
        errorsArray.map(err => {
          console.log(err);
        });
      }, () => {
        this.isSubmitting = false;
      });
  }
}
