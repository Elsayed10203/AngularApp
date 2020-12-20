import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../Shared/Services/ProductService.service';
import {Product}from '../../Shared/Models/product.model'
import {ExportServiceService} from '../../Shared/export-service.service';

 @Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.css']
})
 

export class UsersShowComponent implements OnInit {
  txt_search="";
   
   constructor(
    public _Serv:ProductService,
    public _ServExl:ExportServiceService,
     ) 
  { 
     
  }
  Search_Fun()
  {
    if(this.txt_search=="")
    {
      this._Serv.LstProductShow=this._Serv.listProducts;
   }
    else
    {
    this._Serv.LstProductShow=this._Serv.listProducts.filter(x=>x.name.startsWith(this.txt_search));
     } 
 
  }
  MyFun(event:any)
  {
    this.Search_Fun();
  }
  ngOnInit(): void {
 
   }

}
