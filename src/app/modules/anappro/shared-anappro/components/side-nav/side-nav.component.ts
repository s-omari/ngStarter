
import {Component ,Input, OnInit , EventEmitter, Output } from '@angular/core';
import { SideNavService} from '../../services/side-nav.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() state;
  // @Output() nodeSelected = new EventEmitter();
    // SideNav Properties
    sideNavState;
    secondarySidenavOpen: boolean = false;
    secondarySidenavContent: string;
    leftSideMenuItems;
    primarySidenavMenuItems;
    secondarySidenavMenuItems;
    activatedUrl;
  constructor(
    public sideNavService: SideNavService
  ) { }

  ngOnInit() {
    this.sideNavState = this.sideNavService.sideNavState;
    console.log(this.sideNavState , 'sideNavState')
  }

  selectItem(item) {
console.log(item)
  }

  openCreateDialog(){
    
  }
  

}
