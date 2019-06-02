// import { Component, OnInit } from '@angular/core';

import {
  Component, OnInit, Input, Output, EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { MockServiceService } from '../../../modules/anappro/mock-service.service';

@Component({
  selector: 'search-filter-list',
  templateUrl: './search-filter-list.component.html',
  styleUrls: ['./search-filter-list.component.scss']
})
export class SearchFilterListComponent implements OnInit {
  @Input() filteredItems;


  searchTerm;
  
  constructor(
    public mockService: MockServiceService,

  ) { }

  ngOnInit() {
  }

  clearSearch() {
    this.searchTerm = '';
    this.search(this.searchTerm);
  }

  search(val) {
    if (!val || !val.trim()) {
      this.filteredItems = this.mockService.query();
      return;
    }
    this.filteredItems = this.mockService.query({
      name: val
    });
  }

}
