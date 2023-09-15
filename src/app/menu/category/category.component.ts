import { TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, Output,Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/core/services/categories-service/categories.service';
import { ItemsService } from 'src/app/core/services/items-service/items.service';
import {faInfinity} from '@fortawesome/free-solid-svg-icons';
import { CategoryDTO } from 'src/app/shared/models/category/CategoryDTO'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxTranslateModule } from 'src/app/shared/modules/translate/translate.module';
import { TranslateApiPipe } from 'src/app/shared/pipes/translate-api.pipe';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports:[
    FontAwesomeModule,
    NgxTranslateModule,
    TranslateApiPipe,
    CommonModule],
})
export class CategoryComponent implements OnInit{
  faInfinity=faInfinity;
  @Input()searchText: string = "";
  categories:BehaviorSubject<CategoryDTO[]>=new BehaviorSubject<CategoryDTO[]>([]);
  categoryId:string;
  lang:string;
  colapsed=true;
  @Output() categoryIdEvent=new EventEmitter<string>();
  @Output() itemHideEvent=new EventEmitter<boolean>();
  constructor(
    private categoriesService:CategoriesService,
    private itemsService:ItemsService,
    private translateService:TranslateService){
      this.lang=this.translateService.currentLang;
  }
  ngOnInit(): void {
    this.categories= this.categoriesService.categories;

  }
  categoryItemsCount(categoryId:string){
    return this.itemsService.categoryItemsCount(categoryId);
  }
  GetSelectedCategoryItems(categoryId:string){
    this.colapsed=!this.colapsed
    this.categorySelected(categoryId);
  }
  GetAllItemsCount(){
    return this.itemsService.GetAllItemsCount();
  }
  GetAllItems(){
    this.colapsed=!this.colapsed
    this.categorySelected('All');
  }
  categorySelected(categoryId:string){
    this.categoryId=categoryId
    this.categoryIdEvent.emit(categoryId);
    this.itemHideEvent.emit(true);

  }
}
