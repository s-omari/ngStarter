import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  sideNavState;
  // secondarySidenavOpen: boolean;
  // secondarySidenavContent: string;
  // primarySidenavMenuItems: any;
  // secondarySidenavMenuItems: any;
  constructor() { }

  setState(property , value) {
    this.sideNavState[property] = value;
  }

}
