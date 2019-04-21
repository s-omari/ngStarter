import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../../shared/shared.module';
// import { SharedAdminModule } from '../shared-admin/shared-admin.module';

import { router, RoutingComponents } from './master.router';
// import { DetailComponent } from './detail/detail.component';

import { CreateModalComponent } from './components/create-modal/create-modal.component';
// import { DayScheduleComponent } from './components/day-schedule/day-schedule.component';

// import { CreateShiftModalComponent } from './components/day-schedule/create-shift-modal/create-shift-modal.component';
// import { EditShiftModalComponent } from './components/day-schedule/edit-shift-modal/edit-shift-modal.component';
import { ConfirmDeleteModalComponent } from './components/confirm-delete-modal/confirm-delete-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';


import { ThemeModule} from '../../@theme/theme.module';
import { AboutComponent } from './detail/about/about.component';



@NgModule({
  imports: [
    CommonModule,
    router,
    // SharedModule,
    // SharedAdminModule,
    ThemeModule
  ],
  declarations: [
    RoutingComponents,
    // DetailComponent,
    // DayScheduleComponent,
    CreateModalComponent,
    // CreateShiftModalComponent,
    // EditShiftModalComponent,
    ConfirmDeleteModalComponent,
    EditModalComponent,
    AboutComponent,
    // UsersComponent
  ],
  entryComponents: [
    CreateModalComponent,
    // CreateShiftModalComponent,
    // EditShiftModalComponent,
    ConfirmDeleteModalComponent,
    EditModalComponent
  ]
  ,
  exports: [
    // SharedModule,
    // SharedAdminModule
    ThemeModule
  ]
})
export class MasterModule { }
