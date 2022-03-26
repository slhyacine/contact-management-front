import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {catchError, map, startWith, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {EnterpriseService} from "../enterprise.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.scss']
})
export class EnterpriseListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'address', 'tva', 'actions'];
  data: any[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  pageSize = 10;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(
        () => {
          this.isLoadingResults = true;
          return this.enterpriseService
            .getAllEnterprises(this.paginator.pageIndex, this.pageSize)
            .pipe(catchError(() => of(null)))
        }
      ),
      map((data: any) => {
        this.isLoadingResults = false;

        if (data === null) {
          return [];
        }
        this.resultsLength = data.totalElements;
        return data.content;
      })
    ).subscribe((data) => { this.data = data; });
  }

  delete(id: string) {
    this.enterpriseService.deleteEnterprise(id).subscribe(res => {
      this.paginator._changePageSize(this.paginator.pageSize);
    });

  }

  edit(id: string) {

  }

}
