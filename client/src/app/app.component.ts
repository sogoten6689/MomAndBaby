import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'Body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit  {

  constructor(private router: Router,  private toastr: ToastrService) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      window.scrollTo(0, 0);
    });
  }

}
