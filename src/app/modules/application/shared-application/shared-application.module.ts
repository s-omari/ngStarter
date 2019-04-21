import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ThemeModule} from '../../../@theme/theme.module';
// shared components
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    FormValidationComponent,
    ThemeSwitcherComponent,
    LanguageSwitcherComponent
  ],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    FormValidationComponent,
    ThemeSwitcherComponent,
    LanguageSwitcherComponent,
    ThemeModule
  ]
})
export class SharedApplicationModule { }
