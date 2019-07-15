import {
  Component, OnInit, EventEmitter, Output,
  ChangeDetectionStrategy, ChangeDetectorRef, OnChanges , ViewChild , ElementRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditModalComponent } from '../shared-anappro/components/edit-modal/edit-modal.component';
import { ConfirmDeleteModalComponent } from '../shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component';
import { SideNavService} from '../shared-anappro/services/side-nav.service';


import * as mockData from '../mock-data';

@Component({
  selector: 'project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDashboardComponent implements OnInit {
  @ViewChild('drawer') drawer: any;
  item;

  itemId: string;
  currentProject;
  projectMembers;


  rightDrawerContent;
  opened: boolean;
  rightSidebarTitle :string;
  breadcrumbs;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,

    public dialog: MatDialog,
    public sideNavService: SideNavService

  ) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      params => {
        // console.log(params['id']);
        this.itemId = params['id'];
        this.getCurrentItem(this.itemId);
        // this.projectMembers = this.currentProject.users;
        this.projectMembers = mockData.projects.data.filter(item => item.id === this.itemId)[0].users;
        console.log(this.projectMembers);
        this.breadcrumbs = [
          {
            title: 'Projects',
            type: 'button',
            route: '../anappro/projects',
            state:'projects'
          },
          {
            title: this.item.name,
            type: 'button',
            route: '../anappro/project/'+this.itemId+'/applications',
            state:'project'


          }
        ];
      });

  }


generateBreadcrumbs() {

}
  deleteItem() {
    // remove item from list and route to items list page
  }


  openChatSidebar() {
    console.log('opening');
    this.rightSidebarTitle = 'Members';
    this.drawer.open();
    this.rightDrawerContent ='members';
  }
  openConfirmDeleteDialog(item): void {
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      disableClose: true,
      data: { title: 'Delete This Project?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== 'exit') {
        this.deleteItem();
      }
    });
  }

  openEditDialog(item): void {


    const dialogRef = this.dialog.open(EditModalComponent, {
      disableClose: true,

      data: {
        name: item.name,
        about: item.about,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'exit') {
        const updatedItem = {
          name: result.name,
          about: result.about,
        };
        this.editItem(updatedItem);
      }
    });
  }

  editItem(item) {
    // edit item in list and DB
  }

  getCurrentItem(itemId) {
    this.item = mockData.projects.data.filter(item => item.id === itemId)[0];
  }

  selectBreadcrumb(crumb) {
    console.log(crumb)
    if (crumb.route) {
      this.router.navigate([crumb.route]);
    }

    if(crumb.state === 'project') {
      this.sideNavService.setSidenavData('currentProject' , this.item);

      console.log(this.item , 'dwcewcf')
    }

    if (crumb.route) {
    this.sideNavService.setSecondarySidenavContent(crumb.state);

    }
    
  }




}
