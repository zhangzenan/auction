import { StockService, Stock } from './../stock.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks:Array<Stock>;

  constructor(public router:Router,private stockService:StockService) { }

  ngOnInit() {
    this.stocks=this.stockService.getStocks();
 
  }

  create(){
    this.router.navigateByUrl('/stock/0');
  }

  update(stock:Stock){
    this.router.navigateByUrl('/stock/'+stock.id);
  }

}


