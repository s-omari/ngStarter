import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  public patterns: {
    email: RegExp;
    password: RegExp;
    phone_number: RegExp;
  };

  // Regular expressions to match against user input for specific fields
  // Testable at https://regex101.com/
  constructor() {
    this.patterns = {
      // Make sure email is broken into two strings by '@' symbol, and is ended by a valid top level domain
      // tslint:disable-next-line:max-line-length
      email: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|ca|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
      // Make sure password contains at least one lowercase character, one uppercase character and one numerical or special character
      password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
      // Check phone number is equal to this format: (***)***-****
      phone_number: /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/
    };
  }
}
