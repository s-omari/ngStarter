import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import {SharedApplicationModule} from '../shared-application/shared-application.module'
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { router, RoutingComponents } from './public-routing.module';



// Services
// import { LoginService } from './login/login.service';
// import { SignupService } from './signup/signup.service';
// import { ForgotPasswordService } from './forgot-password-form/forgot-password.service';
// import { ResetPasswordService } from './reset-password/reset-password.service';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  imports: [
    CommonModule,
    router,
    SharedModule,
    SharedApplicationModule,
    // HttpModule,
    FormsModule,
    // HttpClientModule
  ],
  declarations: [
    RoutingComponents,
    LoginFormComponent,
    LoginComponent,
  ],
  providers: [
    // LoginService,
    // SignupService,
    // ResetPasswordService,
    // ForgotPasswordService,
  ] , 
  exports: [
    SharedModule
  ]
})
export class PublicModule { }
