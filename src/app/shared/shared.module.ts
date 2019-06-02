import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationModule } from './modules/translation/translation.module';
import { ThemeModule} from '../@theme/theme.module';

import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {CollapseMenuComponent} from './components/collapse-menu/collapse-menu.component'
import {AccordionItemComponent} from './components/accordion-item/accordion-item.component';
import { SearchFilterListComponent } from './components/search-filter-list/search-filter-list.component'


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    CollapseMenuComponent,
    AccordionItemComponent,
    SearchFilterListComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    HttpClientModule,
    
  ],
  exports: [
    TranslationModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    HttpClientModule,
    BreadcrumbsComponent,
    CollapseMenuComponent,
    AccordionItemComponent,
    SearchFilterListComponent
  ]
})
export class SharedModule { }
