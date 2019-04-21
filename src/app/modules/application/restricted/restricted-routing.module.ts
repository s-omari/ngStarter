import { ChangePasswordComponent } from './change-password/change-password.component';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestrictedComponent } from './restricted.component';




const routes: Routes = [{
  path: '',
  component: RestrictedComponent,
  children: [


    // { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'settings', component: SettingsComponent },
    { path: 'change-password', component: ChangePasswordComponent },

    { path: '', redirectTo: 'settings', pathMatch: 'prefix' },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RestrictedRoutingModule { }
