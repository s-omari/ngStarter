import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { errorMessages, errors } from './form-errors';
import { PasswordValidation } from '../../../../@core/form-validation/password.validator';
import { ChangePasswordService } from './change-password.service';
import {PublicService} from '../../public/public.service';

import { Location } from '@angular/common';


@Component({
  selector: 'app-change-password',
  templateUrl: 'change-password.component.html',
  styleUrls: ['change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  isSubmitting = false;
  form: FormGroup;

  errors = errors;
  errorMessages = errorMessages;

  constructor(
    private formBuilder: FormBuilder,
    private changePasswordService: ChangePasswordService,
    public publicService: PublicService,

    private matSnackBar: MatSnackBar,
    private location: Location

  ) { }

  ngOnInit() {
    this.buildForm();
    this.form.valueChanges.subscribe(data => this.validateForm());
  }

  buildForm() {
    this.form = this.formBuilder.group({
      old: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: [null, Validators.compose([Validators.required])]
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
      }
    }

  }

  changePassword(event: any) {
    const data = {
      old_password: this.form.get('old').value,
      password: this.form.get('password').value,
      password_confirmation: this.form.get('confirmPassword').value
    };

    this.isSubmitting = true;
    this.changePasswordService.changePassword(data)
      .subscribe((response: any) => {
        this.isSubmitting = false;
        if (response.data) {
          this.matSnackBar.open('Password has Changed Successfully', null, {
            duration: 3000
          });
          this.goBack();
        }
      }, error => {
        this.isSubmitting = false;
        this.matSnackBar.open('Something went wrong, please ensure your old password is correct', null, {
          duration: 3000
        });
      });
  }


  goBack() {
    this.location.back();
  }
}
