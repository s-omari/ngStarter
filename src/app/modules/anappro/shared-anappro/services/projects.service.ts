import { Injectable } from '@angular/core';
import * as mockData from '../../mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() {

  }
  getAllProjects(){
    return mockData.projects;
  }

  getProjectById(id){
    return mockData.projects.data.filter(item => item.id === id)[0];
  }

  getProjectApplications(projectId) {

    const projectChildren = mockData.projects.data.filter(item => item.id === projectId)[0].children;
    let projectApplications = [];

    if (projectChildren) {
    projectApplications = projectChildren.filter(item => item.nodeType === 'application');

    }
    console.log(projectApplications , 'projectApplications');
    return projectApplications;
  }

  getProjectApplication(projectId , applicationId) {

    const projectChildren = mockData.projects.data.filter(item => item.id === projectId)[0].children;
    let projectApplications = [];

    if (projectChildren) {
    projectApplications = projectChildren.filter(item => item.nodeType === 'application');

    }
    const selectedApplication = projectApplications.filter(item => item.applicationId === Number(applicationId))[0];

    console.log(selectedApplication , 'selectedApplication');
    return selectedApplication;
  }


}
