import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';


import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSidenav } from '@angular/material';
import { CreateModalComponent } from './shared-anappro/components/create-modal/create-modal.component';

import * as mockData from './mock-data';
import { MockServiceService } from './mock-service.service';

import { TreeData } from './shared-anappro/components/tree-nav-menu/tree.data';
import {ProjectsService} from './shared-anappro/services/projects.service'
@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  // SideNav Properties
  sideNavState;
  secondarySidenavOpen: boolean = false;
  secondarySidenavContent: string;
  primarySidenavMenuItems;
  secondarySidenavMenuItems;


  TreeData;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    // private route: ActivatedRoute,
    public mockService: MockServiceService,
    public projectsService: ProjectsService,

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
    //TODO generate this from projects data
    this.TreeData = mockData.TreeData;
    this.getItems();

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
    console.log(item, 'item selected');
    
    if (item.nodeType && item.nodeType === 'project') {
      // this.currentProject = item;
      this.currentProject = this.projectsService.getProjectById(item.id);

      console.log(item.id)
      this.secondarySidenavContent = 'project';
      this.sideNavState['secondarySidenavContent'] = 'project';

      this.primarySidenavMenuItems = [];;
     const projectApplications = this.projectsService.getProjectApplications(item.id);
     console.log(projectApplications , 'projectApplications')
      // console.log(projectApplications , 'projectApplications');
      projectApplications.forEach((application) => {
        this.primarySidenavMenuItems.push(      {
          title: application.name,
          route: 'anappro/application/'+ application.projectId+'/'+ application.applicationId,
          icon: 'chrome_reader_mode',
          nodeType: 'application'
        })
      });

      console.log(this.primarySidenavMenuItems , 'primarySidenavMenuItems after edit');


      this.router.navigate(['anappro/project/', item.id, 'applications']);
    }
    if (item.nodeType && item.nodeType === 'projectsParent') {
      this.secondarySidenavContent = 'projects';
      this.sideNavState['secondarySidenavContent'] = 'projects';


      this.router.navigate(['anappro/projects']);

    }
    if (item.nodeType && item.nodeType === 'application') {
      this.secondarySidenavContent = 'application';
      this.sideNavState['secondarySidenavContent'] = 'application';

      console.log('this.secondarySidenavContent' , this.secondarySidenavContent)

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
      this.primarySidenavMenuItems = applicationMenu;
      this.router.navigate(['anappro/application/', item.projectId, item.applicationId]);

    }

    console.log(this.secondarySidenavContent)
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

