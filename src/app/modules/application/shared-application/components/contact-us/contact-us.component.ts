import { ValidationService } from './../../../../../@core/services/validation.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent implements OnInit {
  mail: any = {
    userEmail: '',
    subject: '',
    body: ''
  };
  isSubmitting = false;
  requestStatus: string;

  constructor(
    public validationSer: ValidationService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  /**
   * Simple navigator to return to whichever page the user was on last
   */

  goBack() {
    this.location.back();
  }

  /**
   * Insert API call (POST) request here, set isSubmitting to true while waiting for async call to return
   * Set requestStatus to 'success' upon 200 request status returned
   */

  contactUs() {
    console.log(this.mail);
    setTimeout(() => {
      this.isSubmitting = true;
    }, 2000);
    this.requestStatus = 'success';
  }

}
