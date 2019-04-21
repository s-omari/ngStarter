import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppService } from '../../../@core/services/app.service';

import { Location } from '@angular/common';

@Component({
  selector: 'public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  language = 'en';

  constructor(
    public translate: TranslateService,
    public appService: AppService,
    private location: Location
  ) {
    translate.use(this.language);
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
