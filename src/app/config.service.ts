import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public menuItems=[
    {url:'/', text:'Home', icon:'home'},
    {url:'/basic', text:'Basic', icon:'table-chart'},

  ]
  constructor() { }
}
