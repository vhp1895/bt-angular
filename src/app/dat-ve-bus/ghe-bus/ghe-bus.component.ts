import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe-bus',
  templateUrl: './ghe-bus.component.html',
  styleUrls: ['./ghe-bus.component.scss']
})
export class GheBusComponent implements OnInit {
  @Input() Ghe;
  @Output() eventBook = new EventEmitter();
  trangThaiChon: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  chonGhe() {
    this.trangThaiChon = !this.trangThaiChon;
    let objGhe = {
      trangThai: this.trangThaiChon,
      ghe: this.Ghe
    }
    this.eventBook.emit(objGhe);
  }
}
