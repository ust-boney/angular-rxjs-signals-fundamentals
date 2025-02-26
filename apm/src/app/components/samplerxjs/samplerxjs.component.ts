import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, filter, from, map, of, Subscription, take, tap, timer } from 'rxjs';

@Component({
  selector: 'pm-samplerxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './samplerxjs.component.html',
  styleUrls: ['./samplerxjs.component.css']
})
export class SamplerxjsComponent implements OnInit, OnDestroy {


  // subApples!: Subscription;
  //   subNumber!:Subscription;
  //   subKeyPresses!:Subscription;
  //   subEvenNos!: Subscription;
  //   subTimer!: Subscription;
    subCatchError!: Subscription;

    ngOnDestroy(): void {
      // this.subApples.unsubscribe();
      // this.subNumber.unsubscribe();
      // this.subKeyPresses.unsubscribe();
      // this.subEvenNos.unsubscribe();
      // this.subTimer.unsubscribe();
      this.subCatchError.unsubscribe();
    }
    ngOnInit(): void {
      // const apples$= from([
      //       {id:1,title:'macintosh'}, 
      //       {id:2,title:'gala'}]);
      
      //    this.subApples= apples$
      //                     .pipe(
      //                      map(s=> ({...s,color:'red'})),
      //                      tap(x=> console.log("apple products",x)))
      //                     .subscribe();
      
      // this.subNumber = of(2,4,6)
      //                   .pipe(
      //                     tap(c=> console.log(c)),
      //                     map(x=> x*2),
      //                     tap(t=> console.log("mapped x data: ",t)))
      //                   .subscribe();
      
      // this.subEvenNos= of(1,2,3,4,5,7,6,8).pipe(
      //   filter(c=> c%2===0),
      //   tap(x=> console.log("even nos ",x)),
      //   take(2),
      //   map(x=> x-3),
      //   tap(x=> console.log(x))
      //   )
      //   .subscribe();                  
       
      //   this.subTimer= timer(0,1000)
      //   .pipe(take(10))
      //   .subscribe({
      //     next: (item) => console.log('Timer', item),
      //     error:(err)=> console.log("error", err),
      //     complete: ()=> console.log("no more items available")
      //   });

        this.subCatchError= of(2,4,6)
        .pipe(map(i=>{
          if(i==4){
            throw 'Error!'
          }
          return i;
        }),
        catchError(err=> of('four'))
      )
        .subscribe({
          next: x=> console.log(x),
          error: (err)=> console.log(err),
          complete:()=> console.log("No more items to emit")
        })
    }
}
