import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ListCDsComponent} from "./list-cds/list-cds.component";
import {HomeComponent} from "./home/home.component";

const routes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'listcds', component: ListCDsComponent }
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
