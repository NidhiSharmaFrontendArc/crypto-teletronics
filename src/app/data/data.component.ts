import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }
  @Input() popup = true
  @Input() cryptocurrency: any;
  @Input() cryptocurrencyData = [] as any;
  @Input() allData = [] as any;
  @Input() renderedList = [] as any;
  counter = 1;
  renderedAllItems = false;

  ngOnInit(): void {
  }

  public fields: Object = { text: "text", iconCss: "icon" };

  deleteCrypto(id: any) {
    for (let i = 0; i < this.renderedList.length; ++i) {
      if (this.renderedList[i].id === id) {
        this.renderedList.splice(i, 1);
        this.cryptocurrencyData.push(this.cryptocurrency);
       
      }
    }
    // console.log(id)
    // console.log(this.cryptocurrency)
    // console.log(this.cryptocurrencyData)
  }
  addCrypto(id: any) {
    this.renderedList.push(this.cryptocurrency);
    // console.log(this.renderedList)
    for (let i = 0; i < this.cryptocurrencyData.length; ++i) {
      if (this.cryptocurrencyData[i].id === id) {
        this.cryptocurrencyData.splice(i, 1);
      }
    }
    // console.log(this.cryptocurrencyData)
  }
}
