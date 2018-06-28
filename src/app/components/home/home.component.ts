import { Component, OnInit } from '@angular/core';
import {Response,Headers} from '@angular/http';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
id:number;
private headers=new Headers({
  'Content-Type': 'application/json'
});
  ngOnInit() {
    this.fetchData();
  }

  products=[];
  constructor(private http:HttpClient) { 
  
  }

  fetchData=function(){
    this.http.get("http://localhost:4444/products").subscribe(
      (res:Response)=>{
        this.products=res;
      }
    )
  }

  deleteProduct=function(id){
    if(confirm("Are you sure")){
      const url="http://localhost:4444/products/"+id;
      return this.http.delete(url,{headers: this.headers}).subscribe((res:Response)=>{
        this.fetchData();
      })
      
    }
    
  }

 
}
