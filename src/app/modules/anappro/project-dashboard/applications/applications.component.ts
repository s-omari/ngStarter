import { Component, OnInit } from '@angular/core';
import { ProjectsService} from '../../shared-anappro/services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  projectId;
  applications;
  activatedUrl;
  activeNav;
  constructor(
    private projectsService:ProjectsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,


  ) { 
    this.activatedUrl = this.router.url;
    const urlSegments = this.router.url.split('/');
    this.activeNav = urlSegments[2];
    this.projectId = urlSegments[3];

    this.applications = this.projectsService.getProjectApplications(this.projectId);


    console.log('activeNav urlSegments[3]', urlSegments[3]);
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.activatedUrl = event.url;
        const activeUrlSegments = event.url.split('/');
        this.activeNav = activeUrlSegments[2];
      }
    }
    );

  }

  ngOnInit() {
 

  }

}
