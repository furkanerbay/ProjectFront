import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { Observable } from 'rxjs';
import { List_Color } from 'src/app/contracts/models/list_color';
import { Create_Color } from 'src/app/contracts/models/create_color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClientService: HttpClientService) { }

  read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { //Gerite değer döndürmeyen parametre almayan bir fonksiyon
    const data: Observable<{ totalCount: number; result: List_Color[] }> = this.httpClientService.get<{ totalCount: number; result: List_Color[] }>({
      controller: "Color",
      queryString: `Page=${page}&Size=${size}`
    })
  return data;
}

create(stockType: Create_Color ) {
  this.httpClientService.post({
    controller: "Color"
  }, stockType)
    .subscribe({
      next: (value) => {
      }
    })
}
  
}
