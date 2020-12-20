import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';
import { HttpClient } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly rootUR="http://localhost:5000/api/product";
  listProducts: Product[]=[];
  LstProductShow:Product[]=[];
  PicUrl:string='http://localhost:5000/Resources/logo.jpg';
  prodObj: Product = {
    id: 0,
    name: '',
    photo: '',
    price: 0,
    lastupdateted:''
    
  };
    GetLastUpdated =new Date().toLocaleString()+" : " + new Date().getHours() + ":" + new Date().getMinutes() + ":" +new Date().getSeconds();

  fileToUpload:File = null as any;

  constructor(private http: HttpClient) 
  {
    this.refreshList();
    this.listProducts=[];
  }
  refreshList() {
    this.http
      .get(this.rootUR)
      .toPromise()
      .then(res => {
        console.log(res);
        this.listProducts = res as Product[];
        this.LstProductShow = res as Product[];
      });
  }
 
  getall() {
    return this.http.get<Product[]>(this.rootUR);
  }

  PostProduct() 
  {
    const formData: FormData = new FormData();
    formData.append('Image', this.fileToUpload);
    formData.append('product', JSON.stringify(this.prodObj));

    return this.http.post(this.rootUR, formData);
  }
  DeleteProduct(id:string) {
    return this.http.delete(this.rootUR.concat('/', id));
  }

LoadImage() {
    if(this.prodObj.photo!=' ')
    {
       this.PicUrl='http://localhost:5000/Resources/'+this.prodObj.photo
    }
    else
    {
      this.PicUrl='http://localhost:5000/Resources/logo.jpg';
    }
  }
  UpdateProduct() {
    const formData: FormData = new FormData();
    formData.append('Image', this.fileToUpload);
    formData.append('product', JSON.stringify(this.prodObj));
    return this.http.put(this.rootUR, formData);
  }

  resetForm( )
   {           
       this.prodObj = {
        id: 0,
        name: '',
         photo:'',
         price:0,
        lastupdateted: this.GetLastUpdated
       };
       // this.LoadImage;
        this.PicUrl='http://localhost:5000/Resources/logo.jpg';
     
  }

}
