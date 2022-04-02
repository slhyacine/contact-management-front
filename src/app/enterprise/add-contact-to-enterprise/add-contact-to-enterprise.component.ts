import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, switchMap, tap} from "rxjs/operators";
import {EnterpriseService} from "../enterprise.service";
import {ContactService} from "../../contact/contact.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-contact-to-enterprise',
  templateUrl: './add-contact-to-enterprise.component.html',
  styleUrls: ['./add-contact-to-enterprise.component.scss']
})
export class AddContactToEnterpriseComponent implements OnInit, AfterViewInit {

  contactControl = new FormControl();
  filteredContacts: Observable<any> | undefined;
  selectedContact = '';
  disabled = true;

  constructor(
    public dialogRef: MatDialogRef<AddContactToEnterpriseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private enterpriseService: EnterpriseService,
    private contactService: ContactService) { }

  ngOnInit(): void {
  }

  discard() {
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    this.filteredContacts = this.contactControl.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(value => this.contactService.autocompleteContactByNameAndLastname(value))
    );
  }

  addContact() {
    this.enterpriseService.addContactToEnterprise(this.data.enterpriseId, this.selectedContact)
      .subscribe(
        (enterprise) => {
          this.dialogRef.close(enterprise);
        }
      )
  }

  selectContact(contact: any) {
    this.selectedContact = contact.id;
    this.disabled = false;
  }
}
