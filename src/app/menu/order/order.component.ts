import { TranslateService } from '@ngx-translate/core';
import { OrdersService } from 'src/app/core/services/orders-service/orders.service';
import { Component, AfterContentChecked, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { inOutAnimation ,showHideAnimation} from 'src/app/animation';
import { OrderDTO } from 'src/app/shared/models/order/OrderDTO';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  animations: [
    inOutAnimation,showHideAnimation
  ],
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements AfterContentChecked ,AfterViewChecked{
  hide:boolean=true;
  orders:BehaviorSubject<OrderDTO[]>=new BehaviorSubject<OrderDTO[]>([]);
  scrolled:boolean=true;
  totalPrice:number=0;
  lang:string;
  @ViewChild('scrollMe',{ static: true }) private myScrollContainer: ElementRef;
  constructor(
    private ordersService:OrdersService,
    private translateService:TranslateService){
    this.lang=this.translateService.currentLang;
    this.orders=this.ordersService.orders;
  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }



  ngAfterContentChecked():void{
    this.totalPrice=this.ordersService.getTotalPrice();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scroll({
        top: this.myScrollContainer.nativeElement.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    } catch(err) { }
}
}
