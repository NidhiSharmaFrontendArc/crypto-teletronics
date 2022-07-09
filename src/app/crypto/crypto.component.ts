import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
  popup = false
  allData = [] as any;
  cryptocurrencyData = [] as any;
  renderedList: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.sendGetRequest().subscribe((data: any) => {
      this.allData = data.data;
      this.renderedList = this.allData.slice(0, 6);
      this.cryptocurrencyData = this.allData.filter((item: Object) => this.allData.slice(0, 6).indexOf(item) < 0);
    })
  }
  ClickedOut(event: any) {
    if(event.target.className === "overlay") {
      this.popup = false;
    } 
  }
}

