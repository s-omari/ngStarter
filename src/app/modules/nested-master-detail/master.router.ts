import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterComponent } from './master.component';
import { DetailComponent } from './detail/detail.component';
import { UsersComponent } from './detail/users/users.component';
import { AboutComponent} from './detail/about/about.component';

// routing components


export const RoutingComponents = [
    MasterComponent,
    DetailComponent,
    UsersComponent,
    AboutComponent
    ];

const routes: Routes = [
    {
        path: '', component: MasterComponent,
        children: [
            {
                path: ':id', component: DetailComponent,
                children: [
                    { path: 'users', component: UsersComponent },
                    { path: 'about', component: AboutComponent },

                ]
            }
        ],
    },


];

export const router = RouterModule.forChild(routes);

