import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchFilterComponent } from './search-filter.component';


// routing components


export const RoutingComponents = [
    SearchFilterComponent,

    ];

const routes: Routes = [
    {
        path: '', component: SearchFilterComponent,
    },


];

export const router: ModuleWithProviders = RouterModule.forChild(routes);

