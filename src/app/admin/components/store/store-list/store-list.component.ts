import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { List_Store } from 'src/app/contracts/models/list_store';
import { StoreService } from 'src/app/services/models/store/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {

  constructor(private storeService:StoreService){}

  displayedColumns: string[] = ['id','storeName','storeDescription'];
  dataSource: MatTableDataSource<List_Store> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  getStore() {
    this.storeService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
      .subscribe({
        next: (value) => {
          this.dataSource = new MatTableDataSource<List_Store>(value.result);
          this.paginator.length = value.totalCount;
        }
      })
  }

  pageChanged() {
    this.getStore();
  }

  ngOnInit() {
    this.getStore();
  }

}
