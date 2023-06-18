import { Component } from '@angular/core';
import { Create_Province } from 'src/app/contracts/models/create_province';
import { ProvinceService } from 'src/app/services/models/province/province.service';

@Component({
  selector: 'app-create-province',
  templateUrl: './create-province.component.html',
  styleUrls: ['./create-province.component.scss']
})
export class CreateProvinceComponent {

  createProvince : string = "";

  constructor(private provinceService:ProvinceService){}

  create() {
    const province: Create_Province =  {
      provinceName : this.createProvince
    }
    this.provinceService.create(province)
  }

}
