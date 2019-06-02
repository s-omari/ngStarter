import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ThemeModule} from '../../@theme/theme.module';

import { DemoLandingPageComponent } from './demo-landing-page.component';
import {routing} from './demo-landing-page.router';

@NgModule({
  declarations: [DemoLandingPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ThemeModule,
    routing
  ]
})
export class DemoLandingPageModule {  }
