import { useAnimation } from '@angular/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {adminComponent} from '../app/Features/admin/admin.component'
import {UsersShowComponent} from '../app/Features/users-show/users-show.component'
  const routes: Routes = [
  {path:"admin",component:adminComponent},
  {path:"user",component:UsersShowComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponenet=[adminComponent,UsersShowComponent ];