import { ItemDTO } from '../../../shared/models/item/ItemDTO';
import { OrdersService } from 'src/app/core/services/orders-service/orders.service';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css'],
})

export class QuantityComponent implements OnInit{
  @Input() item:ItemDTO;
   itemQuantity:BehaviorSubject<number>=new BehaviorSubject<number>(0);
  constructor(private ordersService:OrdersService){
  }
  ngOnInit(): void {

      this.itemQuantity.next(this.item.quantity);

  }
  minus(){

    if(this.item.quantity>0)
    {
      this.item.quantity-=1;
      this.itemQuantity.next(this.item.quantity);
    }
    this.minusOrder(this.item);
  }
  plus(){

    this.item.date=new Date;
    this.item.quantity+=1;
    this.addOrder(this.item);
    this.itemQuantity.next({...this.item}.quantity);
  }
  addOrder(item:any){
    let itemFounded=false;
    this.ordersService.orders.value.forEach(u=>{
      if(u.id==item.id){
        itemFounded=true;
        return;
      }
    });
    if(itemFounded){
      this.ordersService.updateOrder(this.item);
      let index=this.ordersService.orders.value.findIndex(u=>{return u.id==item.id});
      this.ordersService.orders.value[index].quantity+=1;
      this.itemQuantity.next(this.ordersService.orders.value[index].quantity)
      this.ordersService.orders.value[index].date=new Date;
      return;
    }
    else{
      if(this.ordersService.orderId==''){
        this.ordersService.getOrderId().subscribe({
          next: (res) => {
            this.ordersService.orderId=res.id;
          },
          complete:()=>{
            this.ordersService.setOrder(this.item).subscribe({
              next: (res) => {
                console.log({...item,orderItemId:res.id});
                this.ordersService.orders.value.push({...item,orderItemId:res.id});
              },
              complete:()=>{

              },
              error: (error) => {
                console.log(error);
              },
            });

          },
          error: (error) => {
            console.log(error);
          },
          });
      }else{
        this.ordersService.setOrder(this.item).subscribe({
          next: (res) => {
            this.ordersService.orders.value.push({...item,orderItemId:res.id});
            this.ordersService.setOrder(this.item);
          },
          complete:()=>{

          },
          error: (error) => {
            console.log(error);
          },
        });
      }
    }
  }

  minusOrder(item:any){
    let itemFounded=false;
    this.ordersService.orders.value.forEach(u=>{
      if(u.id==item.id){
        itemFounded=true;
        return;
      }
    });
    if(itemFounded){
      let index=this.ordersService.orders.value.findIndex(u=>{return u.id==item.id});
      if(this.ordersService.orders.value[index].quantity>1){
        this.ordersService.updateOrder(this.item);
        this.ordersService.orders.value[index].quantity-=1;
        this.ordersService.orders.value[index].date=new Date;
      }
      else{
        console.log(this.ordersService.orders.value[index]);
        this.ordersService.deleteOrder(this.ordersService.orders.value[index].orderItemId);
        this.ordersService.orders.value.splice(index,1);
      }

    }
  }

}
