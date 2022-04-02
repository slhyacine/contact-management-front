import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

  contactId: string = "";
  contact: any;
  constructor(private route: ActivatedRoute, private contactService: ContactService) {
    this.contactId = this.route.snapshot.paramMap.get('id') || '';
    this.contactService.getContact(this.contactId).subscribe(res => {
      console.log(res);
      this.contact = res;
    });
  }

  ngOnInit(): void {}

}
