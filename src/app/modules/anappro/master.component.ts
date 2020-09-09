import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';


import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { CreateModalComponent } from './shared-anappro/components/create-modal/create-modal.component';

import * as mockData from './mock-data';
import { MockServiceService } from './mock-service.service';

import { TreeData } from './shared-anappro/components/tree-nav-menu/tree.data';
import {ProjectsService} from './shared-anappro/services/projects.service';
import { SideNavService} from './shared-anappro/services/side-nav.service';


import { Store } from "@ngrx/store";
// import { Observable } from "rxjs/Observable";
import * as fromRoot from "./shared-anappro/store";

@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class MasterComponent implements OnInit {
  @ViewChild('drawer') public sidenav: MatSidenav;
  searchTerm;
  selectedItem;
  currentProject;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 599px)')
    .pipe(
      map(result => result.matches)
    );
  items;

  activatedUrl;
  activeNav;
  filteredItems;


    public appPageState$: Observable<string>
    public currentProject$: Observable<any>
    public currentApplication$: Observable<any>
    public sidenavExpanded$: Observable<boolean>
    public sidenavState$: Observable<string>
    public primarySidenavMenu$: Observable<any>
    public secondarySidenavMenu$: Observable<any>
  TreeData;
  constructor(
    private store: Store<fromRoot.State>,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    // private route: ActivatedRoute,
    public mockService: MockServiceService,
    public projectsService: ProjectsService,
    public sideNavService: SideNavService


  ) {
    this.activatedUrl = this.router.url;
    const urlSegments = this.router.url.split('/');
    this.activeNav = urlSegments[2];
    console.log('activeNav urlSegments[2]', urlSegments[2]);
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.activatedUrl = event.url;
        const activeUrlSegments = event.url.split('/');
        this.activeNav = activeUrlSegments[2];
        console.log('this.activatedUrl' , this.activatedUrl);
        console.log('this.activeNav' , this.activeNav);
        // this.setSideNavState(activeUrlSegments);
        // this.sideNavService.setSecondarySidenavContent(this.activeNav);
        this.setSideNavState(this.activeNav);
        if(this.activeNav === 'project') {
          const currentProjectId = urlSegments[3];

          // this.setSecondarySidenavMenu();
        } else if (this.activeNav === 'projects') {
          // mockData.projects.data
          this.setSecondarySidenavMenu(this.projectsService.getAllProjects().data);

        }
      }
    }
    );
    this.filteredItems = this.mockService.query();

    // this.TreeData = this.getTreeData();
    // console.log(this.TreeData);
  }


  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateModalComponent, {
      disableClose: true,
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      // do this in the modal and return an object!
      if (result !== 'exit') {
        const newItem = {
          id: '21bb9516-861c-4356-553d-959598695baf',
          name: result.name,
          about: result.about,
        };
        this.createItem(newItem);
      }
    });
  }

  createItem(item) {
    this.mockService.items.push(item);
    this.filteredItems = this.mockService.query();
  }

  getItems() {
    this.items = mockData.projects;
  }

  ngOnInit() {
    this.appPageState$ = this.store.select<string>(fromRoot.getAppPageState);
    this.currentProject$ = this.store.select<any>(fromRoot.getCurrentProject);
    this.currentApplication$ = this.store.select<any>(fromRoot.getCurrentApplication);
    this.sidenavExpanded$ = this.store.select<boolean>(fromRoot.getSidenavExpanded);
    this.sidenavState$ = this.store.select<string>(fromRoot.getSidenavState);
    this.primarySidenavMenu$ = this.store.select<any>(fromRoot.getPrimarySidenavMenu);
    this.secondarySidenavMenu$ = this.store.select<any>(fromRoot.getSecondarySidenavMenu);

    //TODO generate this from projects data
    this.TreeData = mockData.TreeData;
    this.getItems();

  }

  setCurrentProject(project) {
    this.store.dispatch(new fromRoot.SetCurrentProject(project));
  }
  setCurrentApplication(application) {
    this.store.dispatch(new fromRoot.SetCurrentApplication(application));
  }
  setSideNavState(state) {
    this.store.dispatch(new fromRoot.SetSideNavState(state));
  }
  setPrimarySidenavMenu(menu) {
    this.store.dispatch(new fromRoot.SetPrimaryMenu(menu));
  }
  setSecondarySidenavMenu(menu) {
    this.store.dispatch(new fromRoot.SetSecondaryMenu(menu));
  }

  routeToSelected(item){
    if (item.route) {
      if (item.params) {
        this.router.navigate([item.route, item.params]);
      } else {
        this.router.navigate([item.route]);
      }
    }
  }
  selectItem(item) {
    // set currently selected item variable
    this.selectedItem = item;
    // console.log(item, 'item selected');
    if (item.nodeType && item.nodeType === 'project') {
      this.currentProject = this.projectsService.getProjectById(item.id);
      // this.sideNavService.setSecondarySidenavContent('project');
      this.setCurrentProject(item);
      this.setSideNavState('project');

      const secondarySidenavMenu = [];
      const projectApplications = this.projectsService.getProjectApplications(item.id);
      console.log(projectApplications , 'projectApplications')
      projectApplications.forEach((application) => {
        secondarySidenavMenu.push(      {
          title: application.name,
          route: 'anappro/application/' + application.projectId+'/'+ application.applicationId,
          icon: 'chrome_reader_mode',
          nodeType: 'application'
        })
      });
      this.setSecondarySidenavMenu(secondarySidenavMenu);
      // this.sideNavService.ssetecondarySidenavMenu(secondarySidenavMenu);
      // this.sideNavService.setSidenavData('currentProject' , item);

      console.log(secondarySidenavMenu , 'secondarySidenavMenu after edit');


      this.router.navigate(['anappro/project/', item.id, 'applications']);
    }
    if (item.nodeType && item.nodeType === 'projectsParent') {

      this.sideNavService.setSecondarySidenavContent('projects');
      this.router.navigate(['anappro/projects']);

    }
    if (item.nodeType && item.nodeType === 'application') {

      this.sideNavService.setSecondarySidenavContent('application');

      const applicationMenu = [
        {
          title: 'Theme',
          route: 'demo/dynamic-form',
          icon: 'chrome_reader_mode',
          // nodeType: 'application'
        },
        {
          title: 'Modules',
          route: 'demo/dynamic-form',
          icon: 'chrome_reader_mode',
          // nodeType: 'application'
        }
      ];
      this.sideNavService.setSecondarySidenavMenuItems(applicationMenu);

      this.router.navigate(['anappro/application/', item.projectId, item.applicationId]);

    }

  }

  clearSearch() {
    this.searchTerm = '';
    this.search(this.searchTerm);
  }

  search(val) {
    if (!val || !val.trim()) {
      this.filteredItems = this.mockService.query();
      return;
    }
    this.filteredItems = this.mockService.query({
      name: val
    });
  }




}

