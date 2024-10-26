import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products';

  private http= inject(HttpClient);

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(()=>console.log("In http getProducts pipeline"))
    );
  }

  getProduct(id:number): Observable<Product>{
    return this.http.get<Product>(this.productsUrl+"/"+id)
    .pipe(
      tap(()=> console.log("In http getProduct pipeline"))
    );
  }
}
