import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemDTO } from 'src/app/shared/models/item/ItemDTO';
import { environment } from 'src/environments/environment';
import { CrudService } from '../crud-service/crud.service';
import { OrderDTO } from 'src/app/shared/models/order/OrderDTO';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends CrudService{
  baseUrl=environment.baseUrl;
  orderId:string='';
  orders:BehaviorSubject<OrderDTO[]>=new BehaviorSubject<OrderDTO[]>([]);
  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.getOrderList();
  }

  getTotalPrice(){
    let totalPrice=0.0;
    this.orders.value.forEach(u=>{
      totalPrice+=u.price*u.quantity;
    });
    return totalPrice;
  }
  getOrderList(){
    let formData = new FormData();
    formData.append('state','false');
    this.gett(formData,'OrderItem/ListOrderItemByState').subscribe({
          next: (res) => {
            this.orders.next(res as OrderDTO[]);
            if(res!=undefined && res.length>0){
              this.orderId=res[0].orderId;
            }

          },
          complete:()=>{
          },
          error: (error) => {
            console.log(error);
          },
          });
  }
  getOrderId(){
    let formData = new FormData();
      formData.append('tableId','762c0c33-27cc-4c68-dd0b-08dba34db579');
      return this.gett(formData,'Order/AddOrder');
  }
  setOrder(item:ItemDTO):Observable<any>{
    let formData = new FormData();
    formData.append('orderId',this.orderId);
    formData.append('itemId',item.id);
    formData.append('quantity',item.quantity.toString());
    return this.add(formData,'OrderItem/AddOrderItem')
  }
  updateOrder(item:ItemDTO){
    let formData = new FormData();
      formData.append('orderId',this.orderId);
      formData.append('itemId',item.id);
      formData.append('quantity',item.quantity.toString());
      this.update(formData,'OrderItem/UpdateOrderItemByItemIdAndOrderId').subscribe({
        next: (res) => {
          console.log(res);
        },
        complete:()=>{
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  deleteOrder(orderItemId:string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      body:{id:orderItemId},
  };
    this.delete('OrderItem/DeleteOrderItem',httpOptions).subscribe({
      next: (res) => {
        console.log(res);
      },
      complete:()=>{
        if(this.orders.value.length==0){
          this.orderId='';
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
