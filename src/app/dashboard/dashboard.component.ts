import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from "../authentication/login/login.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  checked = false;
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {}

  // @HostBinding('class')
  // get theme() {
  //   return this.checked ? 'dark-theme': 'light-theme';
  // }

}
