import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  constructor(private httpClient: HttpClient) { }

  getAllEnterprises(offset: Number, pageSize: Number) {
    return this.httpClient.get(`${environment.backend}/enterprises/list?offset=${offset}&pageSize=${pageSize}`);
  }
}
