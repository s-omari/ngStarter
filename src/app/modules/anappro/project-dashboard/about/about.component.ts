import { Component, OnInit } from '@angular/core';
import * as mockData from '../../mock-data';

import { Router, ActivatedRoute } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutProject;
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) 
    { 
      this.route.parent.url.subscribe((urlPath) => {
        // get project ID from url
        const url = urlPath[urlPath.length - 1].path;
        console.log(url, 'url');
        this.aboutProject = mockData.projects.data.filter(project => project.id === url)[0].about;

      });
    }

  ngOnInit() {
  }

}
