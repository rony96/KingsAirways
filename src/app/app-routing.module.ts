import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserlogginComponent } from './user/userloggin.component';

const routes: Routes = [

  {path:"home", component:HomeComponent}, 
  {path:"", redirectTo:"/home", pathMatch:"full"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
