import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { Observable } from 'rxjs';
import { List_Order } from 'src/app/contracts/models/list_order';
import { Create_Order } from 'src/app/contracts/models/create_order';
import { ListReponseModel } from 'src/app/contracts/responseModel/listResponseModel';
import { List_User } from 'src/app/contracts/models/list_user';
import { List_Province } from 'src/app/contracts/models/list_province';
import { List_Store } from 'src/app/contracts/models/list_store';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClientService: HttpClientService) { }

  read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { //Gerite değer döndürmeyen parametre almayan bir fonksiyon
    const data: Observable<{ totalCount: number; result: List_Order[] }> = this.httpClientService.get<{ totalCount: number; result: List_Order[] }>({
      controller: "Order",
      queryString: `Page=${page}&Size=${size}`
    })

    return data;
  }

  create(stockType: Create_Order ) {
    this.httpClientService.post({
      controller: "Order"
    }, stockType)
      .subscribe({
        next: (value) => {
        }
      })
  }

  readUsers(successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { //Gerite değer döndürmeyen parametre almayan bir fonksiyon
    const data: Observable<ListReponseModel<List_User>> = this.httpClientService.get<ListReponseModel<List_User>>({
      controller: "User" + "/getalltypes",
    })

    

    return data;
  }
  
  readProvinces(successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { //Gerite değer döndürmeyen parametre almayan bir fonksiyon
    const data: Observable<ListReponseModel<List_Province>> = this.httpClientService.get<ListReponseModel<List_Province>>({
      controller: "Province" + "/getalltypes",
    })

    return data;
  }

  readStores(successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { //Gerite değer döndürmeyen parametre almayan bir fonksiyon
    const data: Observable<ListReponseModel<List_Store>> = this.httpClientService.get<ListReponseModel<List_Store>>({
      controller: "Store" + "/getalltypes",
    })

    return data;
  }
}


