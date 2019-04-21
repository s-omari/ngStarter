import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.sass']
})
export class FormValidationComponent implements OnInit {
  @Input() 'name': any;
  @Input() 'errorMessages': any;
  constructor() { }

  ngOnInit() {
    if (!this.errorMessages) {
      this.errorMessages = {};
    }
  }

}
