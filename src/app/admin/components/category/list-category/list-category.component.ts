import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { List_Category } from 'src/app/contracts/models/list_category';
import { CategoryService } from 'src/app/services/models/category/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit{

  constructor(private categoryService : CategoryService) {

  }


  displayedColumns: string[] = ['id','categoryName'];
  dataSource: MatTableDataSource<List_Category> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  getCategory() {
    this.categoryService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
      .subscribe({
        next: (value) => {
          this.dataSource = new MatTableDataSource<List_Category>(value.result);
          this.paginator.length = value.totalCount;
        }
      })
  }

  pageChanged(){
    this.getCategory();
  }

  ngOnInit(): void {
    console.log(this.getCategory());
  }

}
