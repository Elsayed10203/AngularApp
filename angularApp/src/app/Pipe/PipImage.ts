import{Pipe,PipeTransform}from '@angular/core';
  @Pipe({
    name:'srcpipe'
})
export class pipImg implements PipeTransform{
    Url="http://localhost:5000/Resources/";
    transform(val:string):string{
       if(val=="")
       {
         return this.Url+"logo.jpg";
       }
       else

       {
           return this.Url+val;
       }
    }
}