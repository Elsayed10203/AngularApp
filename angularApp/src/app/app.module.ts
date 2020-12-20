import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule ,RoutingComponenet} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
 import { ProductComponent } from './Features/product/product.component';
 import {ProductService} from './Shared/Services/ProductService.service';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
 import{ToastrModule}from 'ngx-toastr';
import { ProductAllComponent } from './Features/product-all/product-all.component';
import { UsersShowComponent } from './Features/users-show/users-show.component';
import {  adminComponent } from './Features/admin/admin.component';
 
import {pipImg}from './Pipe/PipImage';
 @NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
     ProductAllComponent,
    UsersShowComponent,
    adminComponent,
    pipImg,
    RoutingComponenet,
        

      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
     HttpClientModule,
     BrowserAnimationsModule,  
    ToastrModule.forRoot(),  ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
 
     })
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
