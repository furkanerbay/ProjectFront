import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { List_Book } from 'src/app/contracts/models/list_book';
import { BookService } from 'src/app/services/models/book/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit{

  constructor(private bookService:BookService){}
  

  displayedColumns: string[] = ['id','bookName','categoryName','numberOfPages','colorName','description'];
  dataSource: MatTableDataSource<List_Book> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  getBook() {
    this.bookService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
      .subscribe({
        next: (value) => {
          this.dataSource = new MatTableDataSource<List_Book>(value.result);
          this.paginator.length = value.totalCount;
        }
      })
  }

  pageChanged(){
    this.getBook();
  }

  ngOnInit(): void {
    console.log(this.getBook())
  }
}
