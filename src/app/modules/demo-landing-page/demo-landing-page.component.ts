import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-landing-page',
  templateUrl: './demo-landing-page.component.html',
  styleUrls: ['./demo-landing-page.component.scss']
})
export class DemoLandingPageComponent implements OnInit {

  demoModules = [
    {
      title: 'Application',
      hasDemo: true,
      description: 'Application starter with public and restricted modules',
      route: '../application'
    },
    {
      title: 'App Layout',
      hasDemo: true,
      description: 'Generic App Layout with sidebar',
      route: '../app-layout'
    },
    {
      title: 'Nested Master Detail CRUD',
      hasDemo: true,
      description: 'Nested master detail module with routing and CRUD opperations',
      route: '../nested-master-detail'
    },

    {
      title: 'Search/Filter Module',
      hasDemo: true,
      description: 'Search and Filter Module',
      route: '../search-filter'
    },
    // { title: 'Reports Export', hasDemo: false, description: 'Browse tabulated reports and export to PDF', route: '../reports-export' },
    // { title: 'Master Detail', hasDemo: false, description: '', route: '../master-detail' },
    // { title: 'Maped listings', hasDemo: false, description: '', route: '../map-listing' },
    // { title: 'Chat', hasDemo: false, description: '', route: '../chat' },
    // { title: 'Appointment Booking', hasDemo: false, description: '', route: '../appointments' },
  ];

  appModules = [
    // {
    //   title: 'Anappro',
    //   hasDemo: true,
    //   description: '', route: '../anappro/projects'
    // },
    // {
    //   title: 'Bioreader',
    //   hasDemo: false,
    //   description: 'Browse tabulated reports and export to PDF', route: '../reports-export'
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

}
