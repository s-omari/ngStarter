import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ApplicationDashboardComponent } from './application-dashboard.component';
import { router,RoutingComponents} from './application-dashboard.router';
import { SharedModule } from '../../../shared/shared.module';
// import {BreadcrumbsComponent} from '../../../shared/components/breadcrumbs/breadcrumbs.component'

import { ThemeModule} from '../../../@theme/theme.module';
@NgModule({
  declarations: [RoutingComponents ,
    //  BreadcrumbsComponent
    ],
  imports: [
    CommonModule,
    router,
    SharedModule
  ] ,
  exports: [ SharedModule]
})
export class ApplicationDashboardModule { }
