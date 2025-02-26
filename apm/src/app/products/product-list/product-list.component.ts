import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../product.service';
import { catchError, EMPTY, Subscription, tap } from 'rxjs';

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    standalone: true,
  imports: [NgIf, NgFor, NgClass, ProductDetailComponent, AsyncPipe]
})
export class ProductListComponent  {
  
  pageTitle = 'Products';
  errorMessage = '';
  private subService!: Subscription;
  private productService= inject(ProductService);
  // Products
 // products: Product[] = [];
  readonly products$ = this.productService.product$
  .pipe(
   tap(()=>console.log("In component pipeline")),
   catchError(err=>{
     this.errorMessage= err;
     return EMPTY;
   })
  );
  
// ---For declarative approach we don't need ngOnInit, OnDestroy

  // ngOnInit(): void {

    
  //  this.subService= this.productService.getProducts()
  //  .pipe(
  //   tap(()=>console.log("In component pipeline")),
  //   catchError(err=>{
  //     this.errorMessage= err;
  //     return EMPTY;
  //   })
  //  )
  //  .subscribe(resp=>{
  //   this.products=resp;
  //   console.log(this.products);
  //  });
   
  //}
  
  // ngOnDestroy(): void {
  //   this.subService.unsubscribe();
  // }





  // Selected product id to highlight the entry
  selectedProductId: number = 0;

  onSelected(productId: number): void {
    this.selectedProductId = productId;
  }
}
