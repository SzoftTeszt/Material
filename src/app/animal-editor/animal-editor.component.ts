import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-animal-editor',
  templateUrl: './animal-editor.component.html',
  styleUrls: ['./animal-editor.component.css']
})
export class AnimalEditorComponent {
  animal:any={}
  create=true
  columns=["nev","faj","erkezes","helye","gondozo"]
  constructor(
    private aRoute:ActivatedRoute, private base:BaseService, private route:Router
  ){
    this.aRoute.params.subscribe(
      (res:any)=>{
        console.log(res.id)
        if (res.id) this.base.get(res.id).subscribe(
          (res)=> { this.animal=res; this.create=false}
        )
      }
    )
  }
  onSave(){
    // new Date().toLocaleDateString()
    this.animal.erkezes=new Date(this.animal.erkezes).toLocaleDateString().replaceAll(". ","-").substring(0,10)
    
    this.base.update(this.animal)
    this.route.navigate(['/editable'])

  }
}
