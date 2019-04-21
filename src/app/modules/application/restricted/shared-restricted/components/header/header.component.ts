import { User } from '../../../../../../@core/models/user.model';
import { Component, EventEmitter, Output } from '@angular/core';

import { UserService } from '../../../../../../@core/services/user.service';
import { AppService } from '../../../../../../@core/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // tslint:disable-next-line:no-output-rename
  @Output('toggleNavigation') toggleNavigation = new EventEmitter();

  constructor(
    public userSer: UserService,
    public appService: AppService,

  ) {
    // console.log(userSer.user.email);
  }

}
