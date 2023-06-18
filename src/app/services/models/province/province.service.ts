import { Injectable } from '@angular/core';
import { HttpClientService } from '../../common/http-client.service';
import { Observable } from 'rxjs';
import { List_Province } from 'src/app/contracts/models/list_province';
import { Create_Province } from 'src/app/contracts/models/create_province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private httpClientService: HttpClientService) { }

  read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { //Gerite değer döndürmeyen parametre almayan bir fonksiyon
    const data: Observable<{ totalCount: number; result: List_Province[] }> = this.httpClientService.get<{ totalCount: number; result: List_Province[] }>({
      controller: "Province",
      queryString: `Page=${page}&Size=${size}`
    })

    return data;
  }

  create(stockType: Create_Province ) {
    this.httpClientService.post({
      controller: "Province"
    }, stockType)
      .subscribe({
        next: (value) => {
        }
      })
  }

}
