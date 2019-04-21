import { ValidationService } from '../../../../@core/services/validation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import {PublicService} from '../public.service';


// import { errorMessages, errors } from './form-errors';
import { PasswordValidation } from '../../../../@core/form-validation/password.validator';
// import { ChangePasswordService } from './change-password.service';


const errors = {
  email: '',
  password: '',
  confirmPassword: ''
};

const errorMessages = {
  email: {
    required: 'Email Field is Required',
    // emailPattern: 'Enter a valid email Address'
  },
  password: {
    required: 'New Password Field is Required',
    minlength: 'New Password field mst be 6 or more characters',
    passwordPattern: 'Password must contain one uppercase character, one lowercase character and one number'
  },
  confirmPassword: {
    required: 'New Password Field is Required',
    confirmPassword: 'Please ensure passwords match',
  }
};


interface Iuser {
  email: string;
  password: string;
  password_confirmation: string;
}

class User implements Iuser {
  public email: string = null;
  public password: string = null;
  public password_confirmation: string = null;
  constructor() { }
}
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  user = new User();
  accessToken = null;
  isSubmitting = false;
  repeatPasswordModel: any;


  // isSubmitting = false;
  form: FormGroup;

  errors = errors;
  errorMessages = errorMessages;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public validationSer: ValidationService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
    public publicService: PublicService
    // private changePasswordService: ChangePasswordService,
  ) {
    // Fetch the route params' token that is the unique one given through the password reset email link
    route.params
      .subscribe(params => {
        this.accessToken = params;
      });
  }

  ngOnInit() {
    this.buildForm();
    this.form.valueChanges.subscribe(data => this.validateForm());
  }

  // Change password function
  public updatePassword() {


    // const data = {
    //   email: this.form.get('old').value,
    //   password: this.form.get('password').value,
    //   password_confirmation: this.form.get('confirmPassword').value
    // };
    const user = {
      'email': this.form.get('email').value,
      'password': this.form.get('password').value,
      'password_confirmation': this.form.get('confirmPassword').value,
      // 'token': this.accessToken.token
    };
    // console.log(user);
    // console.log('this.user', this.user);
    // console.log('this.accessToken', this.accessToken);


    this.isSubmitting = true;
    // Feed backend function call the user object from the form template (email, password and new password)
    // and the token from the email link for authentication
    this.publicService.changePassword(user, this.accessToken)
      .subscribe((res: Response) => {
        this.isSubmitting = false;
        // Show snackbar dialog on success and redirect to login
        this.snackbar.open('Password has been updated successfully', null, {
          duration: 5000
        });
        this.router.navigate(['restricted/login']);
      }, (error) => {
        this.isSubmitting = false;
      });
  }



  buildForm() {
    this.form = this.formBuilder.group({
      email: [this.user.email, Validators.compose([Validators.required, Validators.pattern(this.validationSer.patterns.email)])],
      password: [this.user.password, Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: [this.user.password_confirmation, Validators.compose([Validators.required])]
    }, {
        validator: Validators.compose([
          PasswordValidation.confirmPassword,
          PasswordValidation.passwordPattern
        ])
      });
  }

  validateForm() {
    for (const field in this.errors) {
      this.errors[field] = '';
      const input = this.form.get(field);
      if (input.invalid && input.dirty) {
        for (const error in input.errors) {
          this.errors[field] = this.errorMessages[field][error];
        }
      } else { console.log(input); }
    }

  }

  // changePassword(event: any) {
  //   const data = {
  //     old_password: this.form.get('old').value,
  //     password: this.form.get('password').value,
  //     password_confirmation: this.form.get('confirmPassword').value
  //   };

  //   this.isSubmitting = true;
  //   this.changePasswordService.changePassword(data)
  //     .subscribe((response: any) => {
  //       this.isSubmitting = false;
  //       if (response.data) {
  //         this.matSnackBar.open('Password has Changed Successfully', null, {
  //           duration: 3000
  //         });
  //         this.goBack();
  //       }
  //     }, error => {
  //       this.isSubmitting = false;
  //       this.matSnackBar.open('Something went wrong, please ensure your old password is correct', null, {
  //         duration: 3000
  //       });
  //     });
  // }


}
