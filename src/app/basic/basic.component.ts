import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  myDataArray:any //base service
  columnsToDisplay=["id","nev","faj","erkezes","helye","gondozo"]
  
  constructor(private base:BaseService){
    this.myDataArray=this.base.getAll()
  }
}
