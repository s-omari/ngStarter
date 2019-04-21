import { ChangePasswordComponent } from './change-password/change-password.component';
import { SettingsComponent } from './settings/settings.component';


import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RestrictedComponent } from './restricted.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { SharedModule } from '../../../shared/shared.module';
import {SharedApplicationModule} from '../shared-application/shared-application.module';
import { ThemeModule} from '../../../@theme/theme.module';

import { HeaderComponent } from './shared-restricted/components/header/header.component';
// import { FooterComponent } from './shared-restricted/components/footer/footer.component';

import { RestrictedRoutingModule } from './restricted-routing.module';
import { AuthInterceptor } from '../../../@core/authentication/auth-interceptor';
import { HTTP_INTERCEPTORS , HttpClientModule , HttpClient } from '@angular/common/http';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SharedApplicationModule,
    ThemeModule,
    HttpClientModule,
    // HttpClient,
    RestrictedRoutingModule,
  ],
  declarations: [

    RestrictedComponent,
    HeaderComponent,
    // FooterComponent,
    SideMenuComponent,
    SettingsComponent,
    ChangePasswordComponent,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  entryComponents: [ChangePasswordComponent],

  exports: [
    ThemeModule,
    SharedModule ,
    SharedApplicationModule
  ]

})
export class RestrictedModule { }
