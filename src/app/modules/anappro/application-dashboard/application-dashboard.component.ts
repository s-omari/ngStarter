import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import * as mockData from '../mock-data';

import {ProjectsService} from '../shared-anappro/services/projects.service';

@Component({
  selector: 'app-application-dashboard',
  templateUrl: './application-dashboard.component.html',
  styleUrls: ['./application-dashboard.component.scss']
})
export class ApplicationDashboardComponent implements OnInit {

  project;
  application;
  projectApplications;
  breadcrumbs;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectsService,

  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      params => {
        console.log(params)
        // console.log(params['applicationId']);

        this.projectApplications = this.projectService.getProjectApplications(params['projectId']);
        this.project = this.projectService.getProjectById(params['projectId']);
        this.application = this.projectService.getProjectApplication(params['projectId'] , params['applicationId']);

        console.log(this.project);
        console.log(this.application)

        // this.getCurrentItem(this.itemId);

        this.breadcrumbs = [
          {
            title: 'Projects',
            type: 'button',
          },
          {
            title: this.project.name,
            type: 'button'
          },
          {
            title: this.application.name,
            type: 'button',
            children: [
              {
                title: 'anappro-ionic-mobile'
              },
              {
                title: 'anappro-blog'
              }
            ]
          }
        ];
      });
  }


  
}
