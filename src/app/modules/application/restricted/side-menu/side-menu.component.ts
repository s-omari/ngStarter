import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SideMenuLink } from '../../shared-application/models/side-menu-link.model';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent implements OnInit {
  @Output() 'linkClicked' = new EventEmitter();

  links: Array<SideMenuLink> = [
    { label: 'Resources', route: '/demo/resources', iconName: 'list' },
    { label: 'Appointments', route: '/demo/appointments', iconName: 'calendar_today' },
    { label: 'Chat', route: '/demo/chat', iconName: 'message' },
    { label: 'Components', route: '/demo/components', iconName: 'important_devices' }
  ];

  constructor() { }

  ngOnInit() { }
}
