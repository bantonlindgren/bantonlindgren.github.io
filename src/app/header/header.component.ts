import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activePage: string = '/shaders';

  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd)
      {
        this.activePage = val.url;
      }
    });
  }

  ngOnInit() {
  }

}
