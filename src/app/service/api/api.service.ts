import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/Models/product.interface';
import { ProductsModule } from 'src/app/auth/products/products.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:5211/";
  constructor(private http : HttpClient) { }

  onGetProducts():Observable<IProduct[]>{
    let direction = this.url+"products";   
    return this.http.get<IProduct[]>(direction);  
    
  }

  onPostProduct(product:any):Observable<any>{
      let direction = this.url+"products";
     
      return this.http.post<any>(direction,{
        pCategory : product.pCategory,
        pName : product.pName,
        pPrice: product.pPrice,
        pQty: product.pQty
      });
  }
}
