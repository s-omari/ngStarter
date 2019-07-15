import { Component, OnInit } from '@angular/core';
import * as mockData from '../mock-data';
import {ProjectsService} from '../shared-anappro/services/projects.service';
import { SideNavService} from '../shared-anappro/services/side-nav.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects;
  constructor(
   private projectsService : ProjectsService,
   public sideNavService: SideNavService

  ) { }

  ngOnInit() {
    this.getProjects();
  }


  getProjects() {
    this.projects = mockData.projects.data;
    console.log(this.projects);
  }

}
