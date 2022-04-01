import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EnterpriseService} from "../enterprise.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {EnterpriseCreateDto} from "../dtos/EnterpriseCreateDto";
import {ActivatedRoute} from "@angular/router";
import {Contact} from "../../contact/models/Contact";
import {ContactListDto} from "../../contact/dtos/ContactListDto";

@Component({
  selector: 'app-edit-enterprise',
  templateUrl: './edit-enterprise.component.html',
  styleUrls: ['./edit-enterprise.component.scss']
})
export class EditEnterpriseComponent implements OnInit {

  enterpriseId: string = "";
  enterpriseFrom = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    tva: new FormControl('')
  });
  contacts: ContactListDto[] = [];

  constructor(private route: ActivatedRoute, public enterpriseService: EnterpriseService, private snack: MatSnackBar) {
    this.enterpriseId = route.snapshot.paramMap.get('id') || '';
    this.enterpriseService.getEnterprise(this.enterpriseId).subscribe(
      (res) =>  {
        this.contacts = res.contacts;
        this.enterpriseFrom.setValue(new EnterpriseCreateDto(res));
      }
    );
  }

  ngOnInit(): void {
  }

  updateEnterprise() {
    this.enterpriseService.updateEnterprise(this.enterpriseId, new EnterpriseCreateDto(this.enterpriseFrom.getRawValue()))
      .subscribe(res => {
        this.snack.open('New enterprise added successfully', 'ok',
          { verticalPosition: "top", horizontalPosition: "center", duration: 1000 })
      })
  }

  deleteContactFromEnterprise(contactId: string) {
    this.enterpriseService.deleteContactFromEnterprise(this.enterpriseId, contactId)
      .subscribe(
        (res) => this.snack.open('Contact deleted successfully', 'ok',
          { verticalPosition: "top", horizontalPosition: "center", duration: 500 })
      )
  }

}
