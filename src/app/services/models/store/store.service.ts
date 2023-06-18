import { Injectable } from '@angular/core';
import { HttpClientService } from '../../common/http-client.service';
import { Observable } from 'rxjs';
import { List_Store } from 'src/app/contracts/models/list_store';
import { Create_Store } from 'src/app/contracts/models/create_store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClientService: HttpClientService) { }
  

  read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { //Gerite değer döndürmeyen parametre almayan bir fonksiyon
    const data: Observable<{ totalCount: number; result: List_Store[] }> = this.httpClientService.get<{ totalCount: number; result: List_Store[] }>({
      controller: "Store",
      queryString: `Page=${page}&Size=${size}`
    })
  return data;
}

create(stockType: Create_Store ) {
  this.httpClientService.post({
    controller: "Store"
  }, stockType)
    .subscribe({
      next: (value) => {
      }
    })
}

}
