import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'application',
  template: `<router-outlet></router-outlet>`
})
export class ApplicationComponent implements OnInit {

  constructor() {}
  ngOnInit() {}
}
