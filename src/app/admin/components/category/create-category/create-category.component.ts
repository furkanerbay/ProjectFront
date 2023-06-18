import { Component } from '@angular/core';
import { Create_Category } from 'src/app/contracts/models/create_category';
import { CategoryService } from 'src/app/services/models/category/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent {

  categoryName : string = "";

  constructor(private categoryService : CategoryService)
  {

  }

  create() {
    const cate: Create_Category =  {
      categoryName : this.categoryName
    }

    this.categoryService.create(cate)
  }

}
