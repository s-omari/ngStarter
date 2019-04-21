import { NgModule  , ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { AuthService } from './authentication/auth.service';
// import { AuthGuardService } from './authentication/auth-guard.service';
// import { AuthInterceptor } from './authentication/auth-interceptor';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [

  ],
  // providers: [
  //   // UserService,
  //   AuthGuardService,
  //   AuthService,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptor,
  //     multi: true
  //   }
  // ],
})
export class CoreModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: CoreModule,
  //     providers: [ TranslationModule ]
  //   }
  // }
 }
