import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { concatMap, delay, mergeMap, of, range, switchMap } from 'rxjs';

@Component({
  selector: 'pm-concatmapoperator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concatmapoperator.component.html',
  styleUrls: ['./concatmapoperator.component.css']
})
export class ConcatmapoperatorComponent implements OnInit {
  ngOnInit(): void {
    range(1,5)
    .pipe(
      concatMap(s=> 
        of(s)
        .pipe(
          delay(this.randomDelay())
        )
    ))
    .subscribe(v=> console.log("concatMap: ",v));

    range(11,5)
    .pipe(
      mergeMap(s=> 
        of(s)
        .pipe(
          delay(this.randomDelay())
        )
    ))
    .subscribe(v=> console.log("mergeMap: ",v));

  // switch map
    range(21,5)
    .pipe(
      switchMap(s=> 
        of(s)
        .pipe(
          delay(this.randomDelay())
        )
    ))
    .subscribe(v=> console.log("switchMap: ",v));

  
  }

  randomDelay(){
   return Math.floor(Math.random()*1000)+500;
  }
}
