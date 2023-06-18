import { Injectable } from '@angular/core';
import { HttpClientService } from '../../common/http-client.service';
import { Observable } from 'rxjs';
import { List_Book } from 'src/app/contracts/models/list_book';
import { Create_Book } from 'src/app/contracts/models/create_book';
import { ListReponseModel } from 'src/app/contracts/responseModel/listResponseModel';
import { List_Color } from 'src/app/contracts/models/list_color';
import { List_Category } from 'src/app/contracts/models/list_category';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClientService: HttpClientService) { }

  read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { //Gerite değer döndürmeyen parametre almayan bir fonksiyon
    const data: Observable<{ totalCount: number; result: List_Book[] }> = this.httpClientService.get<{ totalCount: number; result: List_Book[] }>({
      controller: "Book",
      queryString: `Page=${page}&Size=${size}`
    })
  return data;
}

create(book: Create_Book ) {
  this.httpClientService.post({
    controller: "Book"
  }, book)
    .subscribe({
      next: (value) => {
      }
    })
}

readColor(successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { //Gerite değer döndürmeyen parametre almayan bir fonksiyon
  const data: Observable<ListReponseModel<List_Color>> = this.httpClientService.get<ListReponseModel<List_Color>>({
    controller: "Color" + "/getalltypes",
  })

  

  return data;
}

readCategory(successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { //Gerite değer döndürmeyen parametre almayan bir fonksiyon
  const data: Observable<ListReponseModel<List_Category>> = this.httpClientService.get<ListReponseModel<List_Category>>({
    controller: "Category" + "/getalltypes",
  })

  return data;
}

}
