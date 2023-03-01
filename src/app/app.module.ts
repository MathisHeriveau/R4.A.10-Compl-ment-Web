import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CDComponent } from './cd/cd.component';
import { ListCDsComponent } from './list-cds/list-cds.component';

@NgModule({
  declarations: [
    AppComponent,
    CDComponent,
    ListCDsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
