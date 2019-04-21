import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationModule } from './modules/translation/translation.module';
import { ThemeModule} from '../@theme/theme.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslationModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    HttpClientModule
  ],
  exports: [
    TranslationModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule
  ]
})
export class SharedModule { }
