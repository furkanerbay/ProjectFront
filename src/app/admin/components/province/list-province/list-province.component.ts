import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { List_Province } from 'src/app/contracts/models/list_province';
import { ProvinceService } from 'src/app/services/models/province/province.service';

@Component({
  selector: 'app-list-province',
  templateUrl: './list-province.component.html',
  styleUrls: ['./list-province.component.scss']
})
export class ListProvinceComponent implements OnInit{
  constructor(private provinceService : ProvinceService){}

  displayedColumns = ['id','provinceName'];
  dataSource: MatTableDataSource<List_Province> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  getProvince(){
    this.provinceService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
      .subscribe({
        next: (value) => {
          this.dataSource = new MatTableDataSource<List_Province>(value.result);
          this.paginator.length = value.totalCount;
        }
      })
  }

  pageChanged(){
    this.getProvince();
  }

  ngOnInit(): void {
    console.log(this.getProvince());
  }

}
