import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './pages/pages.module#PagesModule' },

  // { path: 'reports-export', loadChildren: './demo-modules/reports-export/reports.module#ReportsModule' },
  // { path: 'master-detail', loadChildren: './demo-modules/master-detail/master-detail.module#MasterDetailModule' },
  // { path: 'map-listing', loadChildren: './demo-modules/map-listing/resources.module#ResourcesModule' },
  // { path: 'chat', loadChildren: './demo-modules/chat/chat.module#ChatModule' },
  // { path: 'appointments', loadChildren: './demo-modules/appointments/appointments.module#AppointmentsModule' },
  // { path: 'home', loadChildren: './landing-page/landing-page.module#LandingPageModule' },
  // loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)

  { path: 'home',
  loadChildren: () => import('./modules/demo-landing-page/demo-landing-page.module').then(m => m.DemoLandingPageModule)
},
  { path: 'app-layout', 
  loadChildren: () => import('./modules/app-layout/app-layout.module').then(m => m.AppLayoutModule)
  },
  { path: 'search-filter',
  loadChildren: () => import('./modules/search-filter/search-filter.module').then(m => m.SearchFilterModule)
 },

  { path: 'application', 
  loadChildren: () => import('./modules/application/application.module').then(m => m.ApplicationModule)
  },

  { path: 'nested-master-detail', 
  loadChildren: () => import('./modules/nested-master-detail/master.module').then(m => m.MasterModule)
},
  { path: 'anappro', 
  loadChildren: () => import('./modules/anappro/master.module').then(m => m.MasterModule)
 },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
