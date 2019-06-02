import {NestedTreeControl} from '@angular/cdk/tree';
import {Component ,Input, OnInit , EventEmitter, Output } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
  iconname?: string;

}

const TREE_DATA: any = [
 {
    name: 'Projects',
    iconname: 'folder_special',
    children: [
      {
        name: 'Anappro',
        children: [
          {name: 'IDE'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Bioreader',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
  {
    name: 'Users',
    iconname: 'people_outline',
    children: [
      {name: 'Mike Ike'},
      {name: 'Omar Badaoui'},
      {name: 'john doe'},
    ]
  },
];


@Component({
  selector: 'tree-nav-menu',
  templateUrl: './tree-nav-menu.component.html',
  styleUrls: ['./tree-nav-menu.component.scss']
})
export class TreeNavMenuComponent implements OnInit {

  @Input() data;
  @Output() nodeSelected = new EventEmitter();

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  
  constructor() {

    // this.dataSource.data = this.nestedDataSource;
    // this.dataSource.data = TREE_DATA;
    // this.dataSource.data = this.data;
    // console.log(this.data);

    // console.log(this.nestedDataSource, 'nestedDataSource')
    // console.log()
    // console.log()

  }

  ngOnInit() {
    this.dataSource.data = this.data;
    console.log(this.data);
  }
  selectNode(node) {
    console.log(node);
    this.nodeSelected.emit(node);
  }

  // hasChild = (_: number, node: TreeData) => !!node.children && node.children.length > 0;

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  
  // getChildren = (node: TreeData) => of(node.children);
  // nestedTreeControl = new NestedTreeControl(this.getChildren);
  // hasChild(_: number, node: TreeData) {
  //   console.log(node);
  //   return node.children != null && node.children.length > 0;
  // }
}
