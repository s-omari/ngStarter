import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';


import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { CreateModalComponent } from './components/create-modal/create-modal.component';

import * as mockData from './mock-data';
import { MockServiceService } from './mock-service.service';

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
  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 599px)')
    .pipe(
      map(result => result.matches)
    );
  items;

  activatedUrl;
  activeNav;
  filteredItems;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    // private route: ActivatedRoute,
    public mockService: MockServiceService

  ) {
    this.activatedUrl = this.router.url;
    const urlSegments = this.router.url.split('/');
    this.activeNav = urlSegments[2];
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.activatedUrl = event.url;
        const activeUrlSegments = event.url.split('/');
        this.activeNav = activeUrlSegments[2];
      }
    }
    );
    this.filteredItems = this.mockService.query();
  }


  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateModalComponent, {
      disableClose: true,
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      // do this in the modal and return an object!
      if (result !== 'exit') {
        const newItem =  {
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
    this.getItems();
  }

  selectItem(item) {
    // set currently selected item variable
    this.selectedItem = item;
    this.router.navigate(['nested-master-detail/', item.id, 'about']);
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

