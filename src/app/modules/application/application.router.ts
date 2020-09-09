import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../@core/authentication/auth-guard.service';
import { ApplicationComponent } from './application.component';

export const RoutingComponents = [
    ApplicationComponent
];

const routes: Routes = [
    {
        path: '', component: ApplicationComponent,
        children: [
            {
                path: 'restricted',
                canActivate: [AuthGuardService],
                loadChildren: './restricted/restricted.module#RestrictedModule'
            },
            {
                path: 'public',
                loadChildren: './public/public.module#PublicModule'
            },
            {
                path: '',
                redirectTo: 'restricted',
                pathMatch: 'full',
            },
            { path: '**', pathMatch: 'full', redirectTo: 'restricted' }
        ]
    }
];

export const router = RouterModule.forChild(routes);
