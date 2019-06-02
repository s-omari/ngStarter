import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  panelOpenState = true;
  categoryFilters: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  selectedRadio: string;
  radioFilters: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  sliderValue = 0;

  constructor() { }

  ngOnInit() {
  }

}
