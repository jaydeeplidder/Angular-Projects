import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements AfterViewInit {

  constructor(private viewConatainer:ViewContainerRef,private componentReference: ComponentFactoryResolver){}

  @ViewChild('box') box:ElementRef;
    
  
  
  ngAfterViewInit(){

    console.log(this.box.nativeElement.children);
    // this.box.nativeElement.style.color="red";
    
   }
   
   next(){
     var elm=this.box.nativeElement;
     var item=elm.children;
     elm.append(item[0]);
     
   }

   prev(){
    var elm=this.box.nativeElement;
    var item=elm.children;
    elm.prepend(item[item.length-1]);
   }

   async component(){
   
      
      const{ ChildComponent } =await import("../child/child.component");
      this.viewConatainer.createComponent(
        this.componentReference.resolveComponentFactory(ChildComponent)
       
      )
      
    
   }

   async clear(){
    const{ ChildComponent } =await import("../child/child.component");
    
   }
  
}
