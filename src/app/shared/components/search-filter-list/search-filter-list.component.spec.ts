import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterListComponent } from './search-filter-list.component';

describe('SearchFilterListComponent', () => {
  let component: SearchFilterListComponent;
  let fixture: ComponentFixture<SearchFilterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
