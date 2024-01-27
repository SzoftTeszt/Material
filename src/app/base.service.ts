import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
 url="http://localhost:3000/allatok/"
 animal=new BehaviorSubject<any>(null)
  constructor(private http:HttpClient) {
    this.loadAll();
   }

  getAll(){
    return this.animal
  }

  get(id:any){
    return this.http.get(this.url+id)
  }

  delete(id:any){
    (this.http.delete(this.url+id)).forEach(
      ()=>this.loadAll()
    )
  }

  update(body:any){

    console.log("body:",body)
    if (body.id!=undefined)  this.http.put(this.url+body.id,body)
      .forEach(
       ()=>this.loadAll())

    else this.http.post(this.url, body).forEach(
        ()=>this.loadAll())
    
  }


  private loadAll(){
    this.http.get(this.url).subscribe(
      (res)=>this.animal.next(res)
    )
  }
}
