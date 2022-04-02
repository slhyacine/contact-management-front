import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EnterpriseService} from "../enterprise.service";
import {EnterpriseCreateDto} from "../dtos/EnterpriseCreateDto";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-enterprise',
  templateUrl: './add-enterprise.component.html',
  styleUrls: ['./add-enterprise.component.scss']
})
export class AddEnterpriseComponent implements OnInit {

  enterpriseFrom = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    tva: new FormControl('')
  });

  constructor(public enterpriseService: EnterpriseService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  addEnterprise() {
    this.enterpriseService.addEnterprise(new EnterpriseCreateDto(this.enterpriseFrom.getRawValue()))
      .subscribe(res => {
        this.snack.open('New enterprise added successfully', 'ok',
          { verticalPosition: "top", horizontalPosition: "center", duration: 1000 })
        this.enterpriseFrom.reset();
      })
  }

}
