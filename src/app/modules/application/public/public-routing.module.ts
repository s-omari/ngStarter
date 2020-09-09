import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routing components
import { ContactUsComponent } from '../shared-application/components/contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginFormComponent} from './login/login-form/login-form.component'
import { PublicComponent } from './public.component';
export const RoutingComponents = [
  PublicComponent,
  LoginComponent,
  SignupComponent,
  ForgotPasswordFormComponent,
  ResetPasswordComponent,
  ContactUsComponent
];


const routes: Routes = [
  {
    path: '', component: PublicComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'prefix' },
      { path: 'login', component: LoginComponent , children: [
      { path: '', component: LoginFormComponent },
      // {path:'forgot-password'}
      { path: 'forgot-password', component: ForgotPasswordFormComponent },


      ]},
      { path: 'sign-up', component: SignupComponent },
      { path: 'password/reset/:token', component: ResetPasswordComponent },
      { path: 'contact-us', component: ContactUsComponent }
    ]
  }];

export const router = RouterModule.forChild(routes);
