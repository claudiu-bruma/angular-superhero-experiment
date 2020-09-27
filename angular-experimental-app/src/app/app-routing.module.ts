import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperHeroListComponent } from './superHeroList/superHeroList.component';
const routes: Routes = [
  {path: 'super-hero-list', component: SuperHeroListComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
