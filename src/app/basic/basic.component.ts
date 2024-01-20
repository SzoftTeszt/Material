import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  myDataArray:any //base service
  columnsToDisplay=["id","nev","faj"]
}
