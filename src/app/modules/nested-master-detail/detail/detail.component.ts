import {
  Component, OnInit, EventEmitter, Output,
  ChangeDetectionStrategy, ChangeDetectorRef, OnChanges
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditModalComponent } from '../components/edit-modal/edit-modal.component';
import { ConfirmDeleteModalComponent } from '../components/confirm-delete-modal/confirm-delete-modal.component';


import * as mockData from '../mock-data';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {

  item;

  itemId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,

  ) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      params => {
        // console.log(params['id']);
        this.itemId = params['id'];
        this.getCurrentItem(this.itemId);
      });

  }



  deleteItem() {
    // remove item from list and route to items list page
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




}
