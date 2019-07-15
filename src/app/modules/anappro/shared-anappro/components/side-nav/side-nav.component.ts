
import { Component, Input, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { SideNavService } from '../../services/side-nav.service';
import { Observable } from 'rxjs';

import { Store } from "@ngrx/store";
import * as fromRoot from "../../store";
import {ProjectsService} from '../../services/projects.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {
  // @Input() state;
  // @Output() nodeSelected = new EventEmitter();
  // SideNav Properties
  // sideNavState;
  // currentState;
  // secondarySidenavOpen: boolean = false;
  // secondarySidenavContent: string;
  // leftSideMenuItems;
  // primarySidenavMenuItems;
  // secondarySidenavMenuItems;
  activatedUrl;
  // data;



  // state varriables
  // layoutState$: Observable<any>;
  // rightExpanded$: Observable<boolean>;
  // showRight$: Observable<boolean>;
  // showLeft$: Observable<boolean>;
  // leftExpanded$: Observable<boolean>;
  // centerExpanded$: Observable<boolean>;
  // showCenter$: Observable<boolean>;
  // rightContent$: Observable<string>;

  public appPageState$: Observable<string>
  public currentProject$: Observable<any>
  public currentApplication$: Observable<any>
  public sidenavExpanded$: Observable<boolean>
  public sidenavState$: Observable<string>
  public primarySidenavMenu$: Observable<any>
  public secondarySidenavMenu$: Observable<any>

  constructor(
    private store: Store<fromRoot.State>,
    public projectsService: ProjectsService,
    public sideNavService: SideNavService
  ) { }

  ngOnInit() {

    // this.sideNavState = this.sideNavService.sideNavState;
    // this.currentState = this.sideNavService.currentState;
    // this.data = this.sideNavService.sidenavData;



    //layout state selectors , TODO create admin container and move layout there
    // this.layoutState$ = this.store.select<any>(fromRoot.getLayoutState);
    // this.rightExpanded$ = this.store.select<boolean>(fromRoot.getRightExpanded);
    // this.showRight$ = this.store.select<boolean>(fromRoot.getShowRight);
    // this.leftExpanded$ = this.store.select<boolean>(fromRoot.getLeftExpanded);
    // this.showLeft$ = this.store.select<boolean>(fromRoot.getShowLeft);
    // this.centerExpanded$ = this.store.select<boolean>(fromRoot.getCenterExpanded);
    // this.showCenter$ = this.store.select<boolean>(fromRoot.getShowCenter);
    // this.rightContent$ = this.store.select<string>(fromRoot.getRightContent);

    this.appPageState$ = this.store.select<string>(fromRoot.getAppPageState);
    this.currentProject$ = this.store.select<any>(fromRoot.getCurrentProject);
    this.currentApplication$ = this.store.select<any>(fromRoot.getCurrentApplication);
    this.sidenavExpanded$ = this.store.select<boolean>(fromRoot.getSidenavExpanded);
    this.sidenavState$ = this.store.select<string>(fromRoot.getSidenavState);
    this.primarySidenavMenu$ = this.store.select<any>(fromRoot.getPrimarySidenavMenu);
    this.secondarySidenavMenu$ = this.store.select<any>(fromRoot.getSecondarySidenavMenu);
    // this.store.select<any>(fromRoot.getSecondarySidenavMenu).subscribe(data => this.secondarySidenavMenu$ = data)
    this.secondarySidenavMenu$.subscribe(data => this.secondarySidenavMenu$ = data);
    // console.log(this.sideNavState, 'sideNavState');
    // console.log(this.currentState, 'currentState');

  }

  selectItem(item) {
    console.log(item)
  }

  openCreateDialog() {
  }

  shrinkSidenav() {
    this.store.dispatch(new fromRoot.ShrinkSideNav());
  }
  expandSidenav() {
    this.store.dispatch(new fromRoot.ExpandSideNav());
  }
  setSideNavState(state) {
    this.store.dispatch(new fromRoot.SetSideNavState(state));
  }
  setSecondarySidenavMenu(menu) {
    this.store.dispatch(new fromRoot.SetSecondaryMenu(menu));
  }


}
