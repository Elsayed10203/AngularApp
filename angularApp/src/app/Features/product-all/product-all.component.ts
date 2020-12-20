import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../Shared/Services/ProductService.service';
 import { NgForm } from '@angular/forms';
 import { ToastrService } from 'ngx-toastr';
 import {Product}from '../../Shared/Models/product.model'
@Component({
  selector: 'app-product-Show',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.css']
})
export class ProductAllComponent implements OnInit {

  constructor( 
    private toastr: ToastrService,
    public _Serv:ProductService
    ) { }

  ngOnInit(): void {
  }

  DeleteFun(id?:any) {
    if (confirm('Are You Want To Delete The Item'))
      this._Serv.DeleteProduct(id).subscribe(
        res => {
          this._Serv.refreshList();
          this.toastr.warning('The Item Successful Deleted', 'Delte');
           this._Serv.resetForm();
        },
        err => {
          this.toastr.error('Error');
        }
      );
  }
  Update(_Product: Product) {
    this._Serv.prodObj = Object.assign({}, _Product);
    this._Serv.LoadImage();
    
  }

}
