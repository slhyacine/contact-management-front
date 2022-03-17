import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) {}

  getAllContacts(offset: Number, pageSize: Number) {
    return this.httpClient.get(`${environment.backend}/contacts/list?offset=${offset}&pageSize=${pageSize}`);
  }
}
