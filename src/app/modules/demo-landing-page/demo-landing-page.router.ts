import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoLandingPageComponent } from './demo-landing-page.component';


const routes: Routes = [

  { path: '', component: DemoLandingPageComponent },
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);

