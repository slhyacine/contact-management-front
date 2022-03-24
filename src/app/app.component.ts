import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddContactComponent} from "./contact/add-contact/add-contact.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {
  }

  addEntity(value: String) {

    if (value === 'contacts') {
      const dialogRef = this.dialog.open(AddContactComponent, {
        width: '600px',
        height: 'fit-content'
      });

      dialogRef.afterClosed().subscribe(res => console.log(res));
    }

    if (value === 'enterprises') {

    }
  }

}
