import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../contact.service";
import {ContactEmployeeCreateDto} from "../dtos/ContactEmployeeCreateDto";
import {ContactFreelanceCreateDto} from "../dtos/ContactFreelanceCreateDto";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  contactFrom = new FormGroup({
    type: new FormControl('EMPLOYEE'),
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    tva: new FormControl('')
  });
  constructor(private contactService: ContactService, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  addContact() {
    if (this.contactFrom.value.type === 'EMPLOYEE') {
      this.contactService.addContactEmployee(new ContactEmployeeCreateDto(this.contactFrom.value))
        .subscribe(res => {
          this.snack.open('New contact added successfully', 'ok',
            { verticalPosition: "top", horizontalPosition: "center", duration: 1000 })
          this.contactFrom.reset();
        });
    }
    if (this.contactFrom.value.type === 'FREELANCE') {
      this.contactService.addContactFreelance(new ContactFreelanceCreateDto(this.contactFrom.value))
        .subscribe(res => {
          this.snack.open('New contact added successfully', 'ok',
            { verticalPosition: "top", horizontalPosition: "center", duration: 1000 })
          this.contactFrom.reset();
        });
    }
  }

}
