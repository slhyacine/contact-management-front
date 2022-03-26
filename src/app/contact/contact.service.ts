import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ContactEmployeeCreateDto} from "./dtos/ContactEmployeeCreateDto";
import {ContactFreelanceCreateDto} from "./dtos/ContactFreelanceCreateDto";
import {Observable} from "rxjs";
import {Contact} from "./models/Contact";

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

  getContact(contactId: string | null): Observable<ContactFreelanceCreateDto>{
    return this.httpClient.get<ContactFreelanceCreateDto>(`${this.contactUrl}/${contactId}`)
  }

  updateContactEmployee(contactId: string, employee: ContactEmployeeCreateDto) {
    return this.httpClient.put(`${this.contactUrl}/${contactId}/editEmployee`, employee)
  }

  updateContactFreelance(contactId: string, freelance: ContactFreelanceCreateDto) {
    return this.httpClient.put(`${this.contactUrl}/${contactId}/editFreelance`, freelance)
  }
}
