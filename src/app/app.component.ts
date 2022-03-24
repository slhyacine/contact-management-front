import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddContactComponent} from "./contact/add-contact/add-contact.component";
import {Router} from "@angular/router";
import {LoginService} from "./authentication/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selected: string = 'contacts';

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public loginService: LoginService
  ) {}

  addEntity() {
    if (this.selected === 'contacts') {
      const dialogRef = this.dialog.open(AddContactComponent, {
        width: '600px',
        height: 'fit-content'
      });

      dialogRef.afterClosed().subscribe(res => console.log(res));
    }

    if (this.selected === 'enterprises') {

    }
  }

}
