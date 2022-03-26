import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../contact.service";
import {ContactFreelanceCreateDto} from "../dtos/ContactFreelanceCreateDto";
import {ContactEmployeeCreateDto} from "../dtos/ContactEmployeeCreateDto";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contactId: string = "";
  contactFrom = new FormGroup({
    type: new FormControl('EMPLOYEE'),
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    tva: new FormControl('')
  });
  constructor(private route: ActivatedRoute, private contactService: ContactService, private snack: MatSnackBar) {
    this.contactId = route.snapshot.paramMap.get('id') || 'null';
    this.contactService.getContact(this.contactId).subscribe(
      (res) => {
        this.contactFrom.setValue(new ContactFreelanceCreateDto(res));
    });
  }

  ngOnInit(): void {}

  addContact() {
    if (this.contactFrom.value.type === 'EMPLOYEE') {
      this.contactService.updateContactEmployee(this.contactId, new ContactEmployeeCreateDto(this.contactFrom.value))
        .subscribe(res => {
          this.snack.open('New contact added successfully', 'ok',
            { verticalPosition: "top", horizontalPosition: "center", duration: 1000 })
        });
    }
    if (this.contactFrom.value.type === 'FREELANCE') {
      this.contactService.updateContactFreelance(this.contactId, new ContactFreelanceCreateDto(this.contactFrom.value))
        .subscribe(res => {
          this.snack.open('New contact added successfully', 'ok',
            { verticalPosition: "top", horizontalPosition: "center", duration: 1000 })
        });
    }
  }

}
