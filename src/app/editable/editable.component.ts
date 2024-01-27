import { Component, ViewChild } from '@angular/core';
import { BaseService } from '../base.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})
export class EditableComponent {
  myDataArray:any //base service
  columnsToDisplay=["id","nev","faj","erkezes","helye","gondozo","műveletek"]
  
@ViewChild('paginator') paginator!:MatPaginator

  kereses:any

  constructor(private base:BaseService, private router:Router){
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
  onEdit(animal?:any){
    if (animal) 
      this.router.navigate(['editable','edit', animal.id])
    else
      this.router.navigate(['editable','edit', ""])

  }


  onDelete(animal:any){
    this.base.delete(animal.id)
  }
}
