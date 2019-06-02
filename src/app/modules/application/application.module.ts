import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ThemeModule} from '../../@theme/theme.module';
import { SharedApplicationModule} from './shared-application/shared-application.module';
import { router, RoutingComponents } from './application.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    router,
    SharedModule,
    SharedApplicationModule
  ],
  declarations: [
    RoutingComponents
  ],
  exports: [
    ThemeModule ,
    SharedModule,
    SharedApplicationModule
  ],
  providers: [
  ]
})
export class ApplicationModule { }
