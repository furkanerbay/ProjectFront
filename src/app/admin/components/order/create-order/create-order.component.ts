import { Component, OnInit } from '@angular/core';
import { Create_Order } from 'src/app/contracts/models/create_order';
import { OrderService } from 'src/app/services/models/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

    userId : number;
    userProvinceId : number;
    storeId : number;
    storeProvinceId : number;

    users = [];
    provinces = [];
    stores = [];

    constructor(private orderService:OrderService){}
  
    
    getUsers(){
      this.orderService.readUsers().subscribe({
        next: (value) => {
          this.users = value.data;
        }
      })
    }

    getStores(){
      this.orderService.readStores().subscribe({
        next: (value) => {
          this.stores = value.data;
        }
      })
    }

    getProvinces(){
      this.orderService.readProvinces().subscribe({
        next: (value) => {
          this.provinces = value.data;
        }
      })
    }

    ngOnInit(): void {
      this.getUsers();
      this.getStores();
      this.getProvinces();
    }

    create(){
      const createOrder : Create_Order = {
        userId : this.userId,
        userProvinceId : this.userProvinceId,
        storeId : this.storeId,
        storeProvinceId : this.storeProvinceId
      } 

      this.orderService.create(createOrder)

    }


}
