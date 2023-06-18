import { Injectable } from '@angular/core';
import { HttpClientService } from '../../common/http-client.service';
import { Observable } from 'rxjs';
import { List_Category } from 'src/app/contracts/models/list_category';
import { Create_Category } from 'src/app/contracts/models/create_category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClientService: HttpClientService) { }

  read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { //Gerite değer döndürmeyen parametre almayan bir fonksiyon
    const data: Observable<{ totalCount: number; result: List_Category[] }> = this.httpClientService.get<{ totalCount: number; result: List_Category[] }>({
      controller: "Category",
      queryString: `Page=${page}&Size=${size}`
    })
  return data;
}

create(stockType: Create_Category ) {
  this.httpClientService.post({
    controller: "Category"
  }, stockType)
    .subscribe({
      next: (value) => {
      }
    })
}
}
