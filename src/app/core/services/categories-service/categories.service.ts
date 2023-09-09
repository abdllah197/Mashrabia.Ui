import { HttpClient } from '@angular/common/http';
import { CategoryDTO } from 'src/app/shared/models/category/CategoryDTO'
import { Injectable, OnInit } from '@angular/core';
import {
  faCoffee,
  faBlender,
  faIceCream,
  faSmoking,
  faGamepad,
  faWifi,
 } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable } from 'rxjs';
import { CrudService } from '../crud-service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends CrudService implements OnInit{
 icons=[
  {icon:faCoffee,name:faCoffee.iconName},
  {icon:faBlender,name:faBlender.iconName},
  {icon:faIceCream,name:faIceCream.iconName},
  {icon:faSmoking,name:faSmoking.iconName},
  {icon:faGamepad,name:faGamepad.iconName},
  {icon:faWifi,name:faWifi.iconName}];
  categories:BehaviorSubject<CategoryDTO[]>=new BehaviorSubject<CategoryDTO[]>([]);
 //colors=['#cfdddb','#e4cded','#c2dbe9','#c9caef','#fac1d9','#e5dade','#f1c8d0','#c2e9dd'];
constructor(private httpClient:HttpClient){
  super(httpClient);
  this.getCategories().subscribe({
    next: (categories) => {
      this.categories.next(categories);
    },
    complete:()=>{
      this.categories.next(this.setCategoriesIcons(this.categories.value));
    },
    error: (error) => {
      console.log(error);
    },
  });
}
  ngOnInit(): void {
  }
   setCategoriesIcons(categories:CategoryDTO[]){
    categories.forEach(uz=>{
      uz.setIcon=this.icons.filter(u=>{return u.name== uz.icon})[0].icon;
    });
    return categories;
  }
  getCategories(): Observable<any[]>{
    return this.getAll('Category/ListCategory');
  }
}
