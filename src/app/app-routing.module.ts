import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserlogginComponent } from './user/userloggin.component';
import { SearchDetailComponent } from './search-detail.component';

const routes: Routes = [

  {path:"home", component:HomeComponent}, 
<<<<<<< HEAD
  {path:"", redirectTo:"/home", pathMatch:"full"}

=======
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"search/:from/:to",component:SearchDetailComponent}
>>>>>>> 2034a0629ee927294f458f28dec4bf19748551c1
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
