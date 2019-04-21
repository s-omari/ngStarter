import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './pages/pages.module#PagesModule' },
  { path: '', pathMatch: 'full', redirectTo: 'application' },

  // { path: 'reports-export', loadChildren: './demo-modules/reports-export/reports.module#ReportsModule' },
  // { path: 'master-detail', loadChildren: './demo-modules/master-detail/master-detail.module#MasterDetailModule' },
  // { path: 'map-listing', loadChildren: './demo-modules/map-listing/resources.module#ResourcesModule' },
  // { path: 'chat', loadChildren: './demo-modules/chat/chat.module#ChatModule' },
  // { path: 'appointments', loadChildren: './demo-modules/appointments/appointments.module#AppointmentsModule' },
  // { path: 'home', loadChildren: './landing-page/landing-page.module#LandingPageModule' },
  { path: 'application', loadChildren: './modules/application/application.module#ApplicationModule' },

  { path: 'nested-master-detail', loadChildren: './modules/nested-master-detail/master.module#MasterModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
