import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import {PublicService} from '../public.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loadingRoute: boolean;

  constructor(
    private router: Router,
    public publicService: PublicService
  ) {
          // show/hide  progress bar on route change
          this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
              this.loadingRoute = true;
            } else if (event instanceof NavigationEnd) {
              this.loadingRoute = false;
            }
          });
  }


  ngOnInit() {
  }

}
