import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  public sideNavState;
  public currentState;
  public secondarySidenavOpen: boolean = true;
  public secondarySidenavContent: string;
  public primarySidenavMenuItems: any;
  public secondarySidenavMenuItems: any;
  // public sidenavData =  new BehaviorSubject<any>([]);
  public sidenavData:any = [];

  constructor() {
    // set sidenav default data
    this.secondarySidenavOpen = true;
    this.secondarySidenavContent = 'projects';
   }

  public setState(property , value) {
    this.sideNavState[property] = value;
  }
  public setCurrentState(state) {
    this.currentState = state;
  }
  public setSidenavData(property , value) {
    console.log('0000000' , property , value)
    this.sidenavData[property] = value;
    console.log( this.sidenavData)
  }
  public setSecondarySidenavOpen(value) {
    this.secondarySidenavOpen = value;
  }
  public setSecondarySidenavContent(value) {
    this.secondarySidenavContent = value;
  }
  public setPrimarySidenavMenuItems(value) {
    this.primarySidenavMenuItems = value;
  }
  public setSecondarySidenavMenuItems(value) {
    this.secondarySidenavMenuItems = value;
  }

}
