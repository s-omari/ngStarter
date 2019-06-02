import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedAdminModule } from '../shared-admin/shared-admin.module';
import { SharedModule } from '../../shared/shared.module';

import { ThemeModule} from '../../@theme/theme.module';
import { router, RoutingComponents } from './master.router';


import { CreateModalComponent } from './shared-anappro/components/create-modal/create-modal.component';

import { ConfirmDeleteModalComponent } from './shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component';
import { EditModalComponent } from './shared-anappro/components/edit-modal/edit-modal.component';

import {TreeNavMenuComponent} from './shared-anappro/components/tree-nav-menu/tree-nav-menu.component';

import { AvatarModule } from 'ngx-avatar';
import { SideNavComponent } from './shared-anappro/components/side-nav/side-nav.component';



@NgModule({
  imports: [
    CommonModule,
    router,
    SharedModule,
    ThemeModule,
    AvatarModule
  ],
  declarations: [
    RoutingComponents,

    CreateModalComponent,

    ConfirmDeleteModalComponent,
    EditModalComponent,

    TreeNavMenuComponent,

    SideNavComponent,


  ],
  entryComponents: [
    CreateModalComponent,

    ConfirmDeleteModalComponent,
    EditModalComponent
  ]
  ,
  exports: [
    SharedModule,
    // SharedAdminModule
    ThemeModule,
    AvatarModule
  ]
})
export class MasterModule { }
