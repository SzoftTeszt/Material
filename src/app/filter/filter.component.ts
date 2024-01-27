import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BaseService } from '../base.service';
import { MatTableDataSource } from '@angular/material/table';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  myDataArray:any //base service
  columnsToDisplay=["id","nev","faj","erkezes","helye","gondozo"]
  
@ViewChild('paginator') paginator!:MatPaginator

  kereses:any

  constructor(private base:BaseService){
    this.base.getAll().subscribe(
      (res:any)=>{
        this.myDataArray = new MatTableDataSource(res)
        this.myDataArray.paginator=this.paginator
        this.myDataArray.filterPredicate =
        (data:any, filter:string)=>{
        //  console.log("Keresés", this.kereses)
        let source="";
        
        if (!this.kereses){
          this.columnsToDisplay.forEach(
            oszlop => source+=String(data[oszlop])         
          )
        }
        else source=String(data[this.kereses]).toLowerCase()
        
        return source.toLowerCase().includes(filter)
        
        }
      }
    )
  }

  applyFilter(event:any){
    //console.log(event)
    event=event.toLowerCase()
    if (this.myDataArray) {
      this.myDataArray.filter=event
    }
  }



}
