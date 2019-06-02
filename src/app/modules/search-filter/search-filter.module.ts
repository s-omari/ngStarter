import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SearchFilterComponent } from './search-filter.component';
import { ThemeModule} from '../../@theme/theme.module';
import {router,RoutingComponents} from './search-filter.router';

@NgModule({
  declarations: [
    // SearchFilterComponent
    RoutingComponents
  ],
  imports: [
    CommonModule,
    ThemeModule,
    router
  ]
})
export class SearchFilterModule { }
