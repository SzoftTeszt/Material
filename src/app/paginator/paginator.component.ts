import { Component, ViewChild } from '@angular/core';
import { BaseService } from '../base.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  myDataArray:any //base service
  columnsToDisplay=["id","nev","faj","erkezes","helye","gondozo"]
  
@ViewChild('paginator') paginator!:MatPaginator


  constructor(private base:BaseService){
    this.base.getAll().subscribe(
      (res:any)=>{
        this.myDataArray = new MatTableDataSource(res)
        this.myDataArray.paginator=this.paginator
      }
    )
  }
}
