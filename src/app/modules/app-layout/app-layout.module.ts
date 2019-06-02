import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { router , RoutingComponents} from './app-layout.router';
import { ThemeModule} from '../../@theme/theme.module';

@NgModule({
  declarations: [
    RoutingComponents
  ],
  imports: [
    CommonModule,
    router,
    ThemeModule
  ]
})
export class AppLayoutModule { }
