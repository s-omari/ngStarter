import { Component, OnInit, Input , Output  , EventEmitter} from '@angular/core';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() breadcrumbs;
  @Output() private onSelect = new EventEmitter();

  constructor() {


  }

  ngOnInit() {
    console.log(this.breadcrumbs);
  }

  onSelectItem(item) {
    console.log(item);

    this.onSelect.emit(item);

  }

  breadcrumbClicked(crumb){
    console.log(crumb);
    // if (crumb.route) {
    //   if (item.params) {
    //     this.router.navigate([item.route, item.params]);
    //   } else {
    //     this.router.navigate([item.route]);
    //   }
    // }
  }

}
