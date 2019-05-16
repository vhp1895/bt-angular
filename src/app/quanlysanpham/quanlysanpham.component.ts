import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quanlysanpham',
  templateUrl: './quanlysanpham.component.html',
  styleUrls: ['./quanlysanpham.component.scss']
})
export class QuanlysanphamComponent implements OnInit {
  public DSSP: any = [];
  constructor() { }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('DSSP'));
    if(data !== null) {
      this.DSSP = data;
    }
    console.log(this.DSSP);
  }

  themSP(masp, tensp, giasp) {
    let sanphammoi = {masp, tensp, giasp};

    this.DSSP.push(sanphammoi);
    localStorage.setItem('DSSP', JSON.stringify(this.DSSP));
  }
}
