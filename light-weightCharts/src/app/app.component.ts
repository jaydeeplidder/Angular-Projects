import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { createChart } from 'lightweight-charts';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

import { map } from 'rxjs';
declare function greet():void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'light-charts';

  constructor(private http: HttpClient){
    // this.getApi()
    greet();
  }
//   @ViewChild('one')
//   myDiv!: ElementRef;

//   // ngAfterViewInit() {
//   //     console.log(this.myDiv.nativeElement.innerHTML="jaydeep");
//   // }
  
 
//   allData:any=[]
//   url='https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000';
//    chartProperties:any={
//     width:1000,
//     height:700,
//     timeScale:{
//       timeVisible:true,
//       secondVisible:false
//     }
//   }
// // p = document.createElement("div");
//   domElement:any=greet();
//   chart:any=createChart(this.domElement,this.chartProperties);
// ;
  
//   candleSeries:any=this.chart.addCandlestickSeries();


 
//   getApi(){
//     return this.http.get(this.url).subscribe(
//      res=>{
        
//        this.allData=res
//        let cdata=this.allData.map((d:any)=>{
//          return {time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
//        })
//        console.log(cdata)
//        this.candleSeries.setData(cdata);
//      }
//     )
     
//   }
  
  
 

// chart = createChart(document.body, { width: 400, height: 300 });
// lineSeries = this.chart.addLineSeries();
// data=this.lineSeries.setData([
//     { time: '2019-04-11', value: 80.01 },
//     { time: '2019-04-12', value: 96.63 },
//     { time: '2019-04-13', value: 76.64 },
//     { time: '2019-04-14', value: 81.89 },
//     { time: '2019-04-15', value: 74.43 },
//     { time: '2019-04-16', value: 80.01 },
//     { time: '2019-04-17', value: 96.63 },
//     { time: '2019-04-18', value: 76.64 },
//     { time: '2019-04-19', value: 81.89 },
//     { time: '2019-04-20', value: 74.43 },
// ]);

}
