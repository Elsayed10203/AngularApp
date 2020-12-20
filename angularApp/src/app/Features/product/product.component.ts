import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../Shared/Services/ProductService.service';
 import { NgForm } from '@angular/forms';

 import { ToastrService } from 'ngx-toastr';

  @Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
     public _Service:ProductService
  ) {} 
 
 
 Funsubmit(frm: NgForm) {
    if (this._Service.prodObj.id == 0) {
      this.AddFun(frm);
    } else {
      this.UpdateFun(frm);
    }
  }
  AddFun(frm: NgForm) {
    console.log(this._Service.prodObj);
    this._Service.PostProduct().subscribe(
      res => {
        this.toastr.success('Added ');
        this._Service.refreshList();
        this._Service.resetForm( );        

      },
      err => {
        this.toastr.success('Error ! ');
      }
    );
  }
  UpdateFun(frm: NgForm) {
    this._Service.UpdateProduct().subscribe(
      res => {
          this.toastr.info('Updated', 'Sucessfuly Updated ');
        this._Service.refreshList();
        this._Service.resetForm();
      },
      err => {
        console.log(err);
      }
    );
  }


  
   

  handleFileInput(event:any) {
    console.log(event)
    if(event.target.files.length > 0) 
    {
     this._Service.fileToUpload =event.target.files[0]; 
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this._Service.PicUrl = event.target.result;
    };
    reader.readAsDataURL(this._Service.fileToUpload);
  }
  }

  ngOnInit(): void {}
}
