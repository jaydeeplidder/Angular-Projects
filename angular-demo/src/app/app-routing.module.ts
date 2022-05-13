import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',
    component:ViewComponent
  
  },
  {
    path:'child',
    component:ChildComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
