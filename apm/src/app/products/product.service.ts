import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Product } from './product';
import { HttpErrorService } from '../utilities/http-error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products';

  private http= inject(HttpClient);
  private errorService= inject(HttpErrorService);

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(()=>console.log("In http getProducts pipeline")),
      catchError((err)=> this.HandleError(err))
    );
  }

  getProduct(id:number): Observable<Product>{
    return this.http.get<Product>(this.productsUrl+"/"+id)
    .pipe(
      tap(()=> console.log("In http getProduct pipeline")),
      catchError((err)=> this.HandleError(err))
    );
  }

  private HandleError(err:HttpErrorResponse):Observable<never>{
    const formattedMessage= this.errorService.formatError(err);
    return throwError(()=>formattedMessage);
  }
}
