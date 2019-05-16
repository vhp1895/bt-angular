import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuanlysanphamModule } from './quanlysanpham/quanlysanpham.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuanlysanphamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
