import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { List_Order } from 'src/app/contracts/models/list_order';
import { OrderService } from 'src/app/services/models/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit{

  constructor(private orderService : OrderService){}

  displayedColumns = ['id','userName','userProvinceName','storeName','storeProvinceName']
  dataSource: MatTableDataSource<List_Order> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  getOrders() {
    this.orderService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
      .subscribe({
        next: (value) => {
          this.dataSource = new MatTableDataSource<List_Order>(value.result);
          this.paginator.length = value.totalCount;
        }
      })
  }
  
  pageChanged() {
    this.getOrders();
  }
  
  ngOnInit(): void {
    console.log(this.getOrders());
  }

}
