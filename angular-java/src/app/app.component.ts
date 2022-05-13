import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { ApiServicesService } from './services/api-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-java';
  constructor( private api: ApiServicesService){

  }

 user:User= new User("","","");


 
  log=console.log;
 signUp(){
    
   
    console.log(this.user);
    this.api.postUser(this.user) .subscribe({
      next:(res:any)=>{
        let cons = res;
        console.log(cons)
        alert("User added successfully");
        
      },
      error:(error:any)=>{
        this.log(error)
        alert("Error while adding the user");  
      }
    })
 }

 ngOnInit(): void {
   
   const userData = this.api.getJavaUsers().subscribe();
   console.log(userData);
 }

}
