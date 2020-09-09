import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationDashboardComponent } from './application-dashboard.component';



// routing components


export const RoutingComponents = [
    ApplicationDashboardComponent
    ];

const routes: Routes = [

    {
        path: '',
        component: ApplicationDashboardComponent
    },

];

export const router = RouterModule.forChild(routes);

