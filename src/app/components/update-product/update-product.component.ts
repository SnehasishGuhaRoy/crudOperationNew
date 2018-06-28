import { Component, OnInit } from '@angular/core';
import {Response,Headers} from '@angular/http';
import { HttpClient } from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id:number;
  data;
  products;
  productObj:object={};
  exists=false;
  private headers=new Headers({
    'Content-Type': 'application/json'
  });
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=+params['id'];
    });
    this.http.get("http://localhost:4444/products").subscribe(
      (res:Response)=>{
        this.products=res;
        for(var i=0;i<this.products.length;i++){
          if(parseInt(this.products[i].id) === this.id){
            this.exists=true;
            this.data=this.products[i];
            break;
          }else{
            this.exists=false;
          }
        }
      }
    )
  }

  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient) { }
  updateProduct(product){
      this.productObj={
        "name": product.name,
        "color": product.color
      }
      const url="http://localhost:4444/products/"+this.id;
      this.http.put(url,this.productObj).subscribe(()=>{
        this.router.navigate(['/']);
      })

  }

}
