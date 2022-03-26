import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EnterpriseService} from "../enterprise.service";

@Component({
  selector: 'app-view-enterprise',
  templateUrl: './view-enterprise.component.html',
  styleUrls: ['./view-enterprise.component.scss']
})
export class ViewEnterpriseComponent implements OnInit {

  entepriseId: string = "";
  enterprise: any;
  constructor(private route: ActivatedRoute, private enterpriseService: EnterpriseService) { }

  ngOnInit(): void {
    this.entepriseId = this.route.snapshot.paramMap.get('id') || '';
    this.enterpriseService.getEnterprise(this.entepriseId).subscribe(res => {
      this.enterprise = res;
    });
  }

}
