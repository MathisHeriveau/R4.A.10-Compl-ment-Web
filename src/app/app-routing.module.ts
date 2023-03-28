import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {CommonModule} from '@angular/common';
import {ListCDsComponent} from "./list-cds/list-cds.component";
import {HomeComponent} from "./home/home.component";
import {CDComponent} from "./cd/cd.component";
import {NewCDComponent} from "./new-cd/new-cd.component";


const routes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'Catalogue', component: ListCDsComponent },
    { path: 'cd/:id', component: CDComponent },
  { path: 'new-cd', component: NewCDComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
