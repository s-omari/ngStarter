import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ThemeModule} from './@theme/theme.module';

import {CoreModule} from './@core/core.module';
import { SharedModule} from './shared/shared.module'
// move to shared
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AuthService } from './@core/authentication/auth.service';
import { AuthGuardService } from './@core/authentication/auth-guard.service';
import { AuthInterceptor } from './@core/authentication/auth-interceptor';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http';
import { UserService } from './@core/services/user.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
// import { AppLayoutComponent } from './modules/app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    // AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ThemeModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    UserService,
    AuthGuardService,
    AuthService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
  exports: [SharedModule , CoreModule]
})
export class AppModule { }
