import { OrdersService } from './../orders-service/orders.service';
import { CategoriesService } from './../categories-service/categories.service';
import { Injectable } from '@angular/core';
import { ItemDTO } from 'src/app/shared/models/item/ItemDTO';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../crud-service/crud.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ItemsService extends CrudService{
  closed:boolean=false;
  items:BehaviorSubject<ItemDTO[]>=new BehaviorSubject<ItemDTO[]>([]);
  colorIndex:number=0;
  constructor(private categoriesService:CategoriesService,private httpClient: HttpClient,private ordersService:OrdersService) {
    super(httpClient);
    this.getItems().subscribe({
      next: (items) => {
        this.items.next(items as ItemDTO[]);
      },
      complete:()=>{

      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  setItemsColor(items:ItemDTO[]){
    items.forEach(u=>{
      u.color=this.categoriesService.categories.value.filter(c=>{
        return c.id==u.categoryId;
      })[0].color;
      u.quantity=this.setItemsQuantity(u).quantity;
      this.colorIndex++;
    });
    return items
  }
  setItemsQuantity(item:ItemDTO){
    let x=this.ordersService.orders.value.filter(u=>u.id==item.id);
    if(x.length>0){
      item.quantity=x[0].quantity;
      return item;
    }
    item.quantity=0;
    return item;
  }
  GetcategoryItems(categoryId:string){
    return this.items.value.filter(u=>{
      return u.categoryId==categoryId;
    });
  }
  GetAllItems(){
    return this.items.value;
  }
  GetAllItemsCount(){
    return this.GetAllItems().length;
  }
  categoryItemsCount(name:string){
    return this.GetcategoryItems(name).length;
  }
  clearItemsQuantity(){
    this.items.value.forEach(u=>{
      u.quantity=0;
    })
  }
  getItems(){
    return this.getAll('Item/ListItem');
  }
}
