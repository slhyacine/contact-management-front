import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ContactService} from "../contact.service";
import {MatPaginator} from "@angular/material/paginator";
import {catchError, map, startWith, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'lastName', 'address', 'tva', 'actions'];
  data: any[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  pageSize = 10;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(
        () => {
          this.isLoadingResults = true;
          return this.contactService
            .getAllContacts(this.paginator.pageIndex, this.pageSize)
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
    this.contactService.deleteContact(id).subscribe(res => {
      this.paginator._changePageSize(this.paginator.pageSize);
    });

  }

  edit(id: string) {

  }

}
