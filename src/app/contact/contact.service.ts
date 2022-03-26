import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ContactEmployeeCreateDto} from "./dtos/ContactEmployeeCreateDto";
import {ContactFreelanceCreateDto} from "./dtos/ContactFreelanceCreateDto";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactUrl = `${environment.backend}/contacts`;

  constructor(private httpClient: HttpClient) {}

  getAllContacts(offset: Number, pageSize: Number) {
    return this.httpClient.get(`${this.contactUrl}/list?offset=${offset}&pageSize=${pageSize}`);
  }

  addContactEmployee(contactEmployeeCreateDto: ContactEmployeeCreateDto) {
    return this.httpClient
      .post(`${this.contactUrl}/newEmployee`, contactEmployeeCreateDto);
  }

  addContactFreelance(contactFreelanceCreateDto: ContactFreelanceCreateDto) {
    return this.httpClient
      .post(`${this.contactUrl}/newFreelance`, contactFreelanceCreateDto);
  }

  deleteContact(contactId: string) {
    return this.httpClient
      .delete(`${this.contactUrl}/${contactId}`)
  }
}
