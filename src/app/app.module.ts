import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuanlysanphamModule } from './quanlysanpham/quanlysanpham.module';
import { DatVeBusModule } from './dat-ve-bus/dat-ve-bus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuanlysanphamModule,
    DatVeBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
