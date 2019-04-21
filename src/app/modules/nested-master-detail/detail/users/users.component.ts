import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

import * as mockData from '../../mock-data';


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  activatedUrl;
  activeItem;
  itemUsers = [];
  userSelected = false;
  selectedUser: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

    this.route.parent.url.subscribe((urlPath) => {
      const url = urlPath[urlPath.length - 1].path;
      console.log(url, 'url');
      this.itemUsers = mockData.projects.data.filter(item => item.id === url)[0].users;
      // console.log(this.itemUsers);
    });
    // this.getitemUsers();
  }




  ngOnInit() {


  }


  getitemUsers() {


    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {

        const activeUrlSegments = event.url.split('/');
        this.activeItem = activeUrlSegments[2];

      }
    });

    setTimeout(() => {
      this.itemUsers = mockData.projects.data.filter(item => item.id === this.activeItem)[0].users;
    }, 3000);



  }

  selectUser(user) {
    console.log(user);
    this.userSelected = true;
    this.selectedUser = user;
  }

}
