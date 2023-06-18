import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { List_Color } from 'src/app/contracts/models/list_color';
import { ColorService } from 'src/app/services/models/color.service';

@Component({
  selector: 'app-list-color',
  templateUrl: './list-color.component.html',
  styleUrls: ['./list-color.component.scss']
})
export class ListColorComponent implements OnInit {

  constructor(private provinceService : ColorService) {

  }

  displayedColumns: string[] = ['id','colorName'];
  dataSource: MatTableDataSource<List_Color> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  getColor() {
    this.provinceService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
      .subscribe({
        next: (value) => {
          this.dataSource = new MatTableDataSource<List_Color>(value.result);
          this.paginator.length = value.totalCount;
        }
      })
  }
  
  pageChanged() {
    this.getColor();
  }
  
  ngOnInit(): void {
    console.log(this.getColor());
  }

}
