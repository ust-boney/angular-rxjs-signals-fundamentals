import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { Product } from './product';
import { HttpErrorService } from '../utilities/http-error.service';
import { ProductData } from './product-data';
import { ReviewService } from '../reviews/review.service';
import { Review } from '../reviews/review';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products';

  private http= inject(HttpClient);
  private errorService= inject(HttpErrorService);
  private reviewService= inject(ReviewService);

  // declarative approach to get the list of products
  readonly product$= this.http.get<Product[]>(this.productsUrl)
  .pipe(
    tap(()=>console.log("In http getProducts pipeline")),
     catchError((err)=> this.HandleError(err))
  );

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(()=>console.log("In http getProducts pipeline")),
       catchError((err)=> this.HandleError(err))
      //catchError((err)=> of(ProductData.products))
    );
  }

  getProduct(id:number): Observable<Product>{
    return this.http.get<Product>(this.productsUrl+"/"+id)
    .pipe(
      tap(()=> console.log("In http getProduct pipeline")),
      switchMap(product=> this.getProductWithReviews(product)),
      tap(x=> console.log(x)),
      catchError((err)=> this.HandleError(err))
    );
  }

  getProductWithReviews(product:Product): Observable<Product>{
    if(product.hasReviews){
    return this.http.get<Review[]>(this.reviewService.getReviewUrl(product.id))
    .pipe(
      map(reviews=>({...product,reviews} as Product))
    )
  }
  else{
     return of(product);
  }
  }

  private HandleError(err:HttpErrorResponse):Observable<never>{
    const formattedMessage= this.errorService.formatError(err);
    return throwError(()=>formattedMessage);
  }
}
