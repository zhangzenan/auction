import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks:Array<Stock>;

  constructor(public router:Router) { }

  ngOnInit() {
    this.stocks=[
      new Stock(1,"第一只股票",1.99,3.5,"這是第一只股票，是在学习Angular时创建的。",["IT","互联网"]),
      new Stock(2,"第一只股票",2.99,1.5,"這是第二只股票，是在学习Angular时创建的。",["IT","互联网"]),
      new Stock(3,"第一只股票",3.99,2.5,"這是第三只股票，是在学习Angular时创建的。",["IT","互联网"]),
      new Stock(4,"第一只股票",4.99,3.5,"這是第四只股票，是在学习Angular时创建的。",["IT","互联网"]),
      new Stock(5,"第一只股票",5.99,4.5,"這是第五只股票，是在学习Angular时创建的。",["IT","互联网"]),
      new Stock(6,"第一只股票",6.99,4.5,"這是第六只股票，是在学习Angular时创建的。",["IT","互联网"]),
      new Stock(7,"第一只股票",7.99,3.5,"這是第七只股票，是在学习Angular时创建的。",["IT","互联网"]),
      new Stock(8,"第一只股票",8.99,2.5,"這是第八只股票，是在学习Angular时创建的。",["IT","互联网"]),
    ];
  }

  create(){
    this.router.navigateByUrl('/stock/0');
  }

  update(stock:Stock){
    this.router.navigateByUrl('/stock/'+stock.id);
  }

}

export class Stock{
  constructor(
    public id:number,
    public name:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}
