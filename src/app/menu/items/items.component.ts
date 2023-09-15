import { OrdersService } from 'src/app/core/services/orders-service/orders.service';
import { BehaviorSubject } from 'rxjs';
import { ItemsService } from 'src/app/core/services/items-service/items.service';
import { Component, Input, Output, OnChanges, EventEmitter, OnInit } from '@angular/core';
import {faSearch,faXmark} from '@fortawesome/free-solid-svg-icons';
import { ItemDTO } from 'src/app/shared/models/item/ItemDTO';
import { TranslateService } from '@ngx-translate/core';
import { OrderDTO } from 'src/app/shared/models/order/OrderDTO';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { QuantityComponent } from './quantity/quantity.component';
import { TranslateApiPipe } from 'src/app/shared/pipes/translate-api.pipe';
import { ArabicNumbersPipe } from 'src/app/shared/pipes/arabic-numbers.pipe';
import { FilterItemsPipe } from 'src/app/shared/pipes/filter-items.pipe';

@Component({
  standalone:true,
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  imports:[
    CommonModule,
    FontAwesomeModule,
    QuantityComponent,
    TranslateApiPipe,
    ArabicNumbersPipe,
    FilterItemsPipe],
})
export class ItemsComponent implements OnChanges,OnInit{
  faSearch=faSearch;
  faXmark=faXmark;
  items:BehaviorSubject<ItemDTO[]>=new BehaviorSubject<ItemDTO[]>([]);
  categoryItems:ItemDTO[]=[];
  @Input() categoryId:string;
  colorIndex:number=0;
  @Output() itemCloseEvent=new EventEmitter<boolean>();
  @Input() searchItem: string = "";
  lang:string;
  constructor(
    private itemsService:ItemsService,
    private translateService:TranslateService,
    ){
    this.lang=this.translateService.currentLang;
    this.items=this.itemsService.items;
  }
  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.getSelectedCategoryItems(this.categoryId);
  }
  getSelectedCategoryItems(categoryId:string){
    if(categoryId=='All'){
      this.categoryItems=this.items.value;
      this.categoryItems=this.itemsService.setItemsColor(this.categoryItems);
    }
    else{
      this.categoryItems=this.items.value.filter(u=>{return u.categoryId==categoryId});
      this.categoryItems=this.itemsService.setItemsColor(this.categoryItems);
    }
  }
  close(){
    this.searchItem="";
    this.itemCloseEvent.emit(true);
  }
}
