import { Injectable } from '@angular/core';
import { HttpClientService } from '../../common/http-client.service';
import { Observable } from 'rxjs';
import { List_User } from 'src/app/contracts/models/list_user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService:HttpClientService) { }

  read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { //Gerite değer döndürmeyen parametre almayan bir fonksiyon
    const data: Observable<{ totalCount: number; result: List_User[] }> = this.httpClientService.get<{ totalCount: number; result: List_User[] }>({
      controller: "User",
      queryString: `Page=${page}&Size=${size}`
    })
    return data;
  }}
