import { Component } from '@angular/core';
import { Create_Store } from 'src/app/contracts/models/create_store';
import { StoreService } from 'src/app/services/models/store/store.service';

@Component({
  selector: 'app-store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.scss']
})
export class StoreCreateComponent {

  storeName:string = "";
  storeDescription:string = "";

  constructor(private storeService : StoreService)
  {

  }

  create() {
    const store: Create_Store =  {
      storeName : this.storeName,
      storeDescription : this.storeDescription
    }
    this.storeService.create(store)
  }

}
