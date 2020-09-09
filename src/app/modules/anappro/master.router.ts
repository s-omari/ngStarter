import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterComponent } from './master.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { UsersComponent } from './project-dashboard/users/users.component';
import { AboutComponent} from './project-dashboard/about/about.component';
import { ApplicationsComponent } from './project-dashboard/applications/applications.component';

import { ProjectsComponent } from './projects/projects.component';



// routing components


export const RoutingComponents = [
    MasterComponent,
    ProjectDashboardComponent,
    UsersComponent,
    AboutComponent,
    ProjectsComponent,
    ApplicationsComponent
    ];

const routes: Routes = [
    {
        path: '', component: MasterComponent,
        children: [
            {
                path: 'projects', component: ProjectsComponent,
            },
            {
                path: 'project/:id', component: ProjectDashboardComponent,
                children: [
                    { path: 'users', component: UsersComponent },
                    { path: 'about', component: AboutComponent },
                    { path: 'applications', component: ApplicationsComponent },

                ]
            },
            {
                path: 'application/:projectId/:applicationId',
                loadChildren: './application-dashboard/application-dashboard.module#ApplicationDashboardModule'
            },

        ],
    },


];

export const router = RouterModule.forChild(routes);

