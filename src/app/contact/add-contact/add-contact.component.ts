import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../contact.service";
import {ContactEmployeeCreateDto} from "../dtos/ContactEmployeeCreateDto";
import {ContactFreelanceCreateDto} from "../dtos/ContactFreelanceCreateDto";
import {MatDialogRef} from "@angular/material/dialog";

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
    tva: new FormControl('', Validators.required)
  });
  constructor(
    private contactService: ContactService,
    public dialogRef: MatDialogRef<AddContactComponent>) { }

  ngOnInit(): void {
  }

  addContact() {
    if (this.contactFrom.value.type === 'EMPLOYEE') {
      this.contactService.addContactEmployee(new ContactEmployeeCreateDto(this.contactFrom.value))
        .subscribe(res => {
          console.log(res);
          this.dialogRef.close();
        });
    }
    if (this.contactFrom.value.type === 'FREELANCE') {
      this.contactService.addContactFreelance(new ContactFreelanceCreateDto(this.contactFrom.value))
        .subscribe(res => {
          console.log(res);
          this.dialogRef.close();
        });
    }
  }

}
