import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './app-layout.component';


// routing components


export const RoutingComponents = [
    AppLayoutComponent,

    ];

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
    },


];

export const router: ModuleWithProviders = RouterModule.forChild(routes);

