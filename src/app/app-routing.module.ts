import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'basic', component:BasicComponent},
  
  {path:'**', redirectTo:''},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
