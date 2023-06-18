import { Component, OnInit } from '@angular/core';
import { Create_Book } from 'src/app/contracts/models/create_book';
import { BookService } from 'src/app/services/models/book/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit{

  bookName : string = "";
  categoryId : number;
  numberOfPages : number;
  colorId : number;
  description : string = "";

  categories = [];
  colors = [];

  constructor(private bookService : BookService){}

  ngOnInit(): void {
   this.getCategories();
   this.getColors();
  }

  getCategories(){
    this.bookService.readCategory().subscribe({
      next: (value) => {
        this.categories = value.data;
      }
    })
  }

  getColors(){
    this.bookService.readColor().subscribe({
      next: (value) => {
        this.colors = value.data;
      }
    })
  }

  create(){
    const createbook : Create_Book = {
      bookName : this.bookName,
      categoryId: this.categoryId,
      numberOfPages : this.numberOfPages,
      colorId : this.colorId,
      description : this.description
    }

    this.bookService.create(createbook);
  }

}
