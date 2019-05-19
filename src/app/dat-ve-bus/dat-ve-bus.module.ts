import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachGheBusComponent } from './danh-sach-ghe-bus/danh-sach-ghe-bus.component';
import { GheBusComponent } from './ghe-bus/ghe-bus.component';
import { DatVeBusComponent } from './dat-ve-bus.component';

@NgModule({
  declarations: [DanhSachGheBusComponent, GheBusComponent, DatVeBusComponent],
  exports: [DatVeBusComponent],
  imports: [
    CommonModule
  ]
})
export class DatVeBusModule { }
