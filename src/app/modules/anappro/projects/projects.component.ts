import { Component, OnInit } from '@angular/core';
import * as mockData from '../mock-data';
import {ProjectsService} from '../shared-anappro/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects;
  constructor(
   private projectsService : ProjectsService
  ) { }

  ngOnInit() {
    this.getProjects();
  }


  getProjects() {
    this.projects = mockData.projects.data;
    console.log(this.projects);
  }

}
