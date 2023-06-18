import { Component } from '@angular/core';
import { Create_Color } from 'src/app/contracts/models/create_color';
import { ColorService } from 'src/app/services/models/color.service';

@Component({
  selector: 'app-create-color',
  templateUrl: './create-color.component.html',
  styleUrls: ['./create-color.component.scss']
})
export class CreateColorComponent {

  createColor : string = "";

  constructor(private colorService:ColorService){}

  create() {
    const color: Create_Color =  {
      colorName : this.createColor
    }
    this.colorService.create(color)
  }

}
