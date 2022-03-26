import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {EnterpriseCreateDto} from './dtos/EnterpriseCreateDto';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  contactUrl = `${environment.backend}/enterprises`;

  constructor(private httpClient: HttpClient) { }

  getAllEnterprises(offset: Number, pageSize: Number) {
    return this.httpClient.get(`${this.contactUrl}/list?offset=${offset}&pageSize=${pageSize}`);
  }

  addEnterpriseEmployee(enterpriseCreateDto: EnterpriseCreateDto) {
    return this.httpClient
      .post(`${this.contactUrl}/new`, enterpriseCreateDto);
  }

  deleteEnterprise(enterpriseId: string) {
    return this.httpClient
      .delete(`${this.contactUrl}/${enterpriseId}`)
  }
}
