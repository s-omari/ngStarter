import { ValidationService } from '../../../../@core/services/validation.service';
import { Component, OnInit } from '@angular/core';
import { Iuser, User } from '../../../../@core/models/user.model';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user: Iuser;
  invalidCredentials = false;
  requestStatus: string = null;
  isSubmitting = false;

  constructor(public validationSer: ValidationService, public settingsSer: SettingsService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  public updateUser(e) {
    this.isSubmitting = true;
    this.settingsSer.updateUser(this.user)
      .subscribe(response => {
        this.isSubmitting = false;
        this.requestStatus = 'success';
        console.log(response);
      }, error => {
        this.requestStatus = 'invalid email';
        const errors = error.json().errors;
        const errorsArray = [];
        for (const errorText in errors) {
          if (errors.hasOwnProperty(errorText)) {
            errorsArray.push(errors[errorText]);
          }
        }
        errorsArray.map(individualError => {
          console.log(individualError);
        });
      }, () => {
        this.isSubmitting = false;
      });
  }

}
